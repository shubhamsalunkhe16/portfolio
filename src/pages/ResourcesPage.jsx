import { useMemo } from "react";
import Layout from "../components/Layout";
import resources from "../constants/resources";
import "./ResourcesPage.css";
import ResourceCard from "../components/ResourceCard";
import { MultiSelect } from "react-multi-select-component";
import Button from "../components/Button";
import { useSearchParams } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const ResourcesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract unique tags for multi-select
  const uniqueTags = useMemo(() => {
    return Array.from(new Set(resources?.flatMap((item) => item?.tags))).map(
      (tag) => ({ label: tag, value: tag })
    );
  }, [resources]);

  // Get search parameters
  const titleFilter = searchParams.get("title")?.toLowerCase() || "";
  const tagFilters = searchParams.get("tags")?.split(",") || [];

  // Convert tagFilters to selected options for MultiSelect
  const selectedTags = uniqueTags.filter((tag) =>
    tagFilters.includes(tag.value)
  );

  // Filter resources
  const filteredResources = useMemo(() => {
    return resources?.filter((item) => {
      const matchesTitle = titleFilter
        ? item?.title?.toLowerCase()?.includes(titleFilter)
        : true;

      const matchesTags = tagFilters.length
        ? tagFilters.every((tag) => item?.tags?.includes(tag))
        : true;

      return matchesTitle && matchesTags;
    });
  }, [titleFilter, tagFilters, resources]);

  // Handle title filter change
  const handleTitleFilterChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("title", value);
    } else {
      params.delete("title");
    }
    setSearchParams(params);
  };

  // Handle multi-select tag changes
  const handleTagFilterChange = (selected) => {
    const selectedValues = selected.map((option) => option.value);
    const params = new URLSearchParams(searchParams);
    if (selectedValues.length) {
      params.set("tags", selectedValues.join(","));
    } else {
      params.delete("tags");
    }
    setSearchParams(params);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchParams({});
  };

  const handleClick = (event) => {
    if (event.target && event.target.classList.contains("readDocLink")) {
      const resourceLink = event.target.getAttribute("data-link");
      window.open(resourceLink, "_blank");
    }
  };

  return (
    <Layout>
      <section className="pb-8">
        <div id="resources" data-aos="fade-up">
          <SectionHeader title="RESOURCES" className={"text-left"} />

          {/* Filters */}
          <div className="mb-6 flex flex-col md:flex-row gap-6">
            {/* Title Filter */}
            <input
              type="text"
              placeholder="Filter by title"
              className={`border ${
                !!titleFilter ? "border-primary" : "border-text-primary"
              } rounded p-2 flex-1 bg-bg-primary text-text-primary focus-visible:border-primary focus-visible:outline-none`}
              value={titleFilter || ""}
              onChange={(e) => handleTitleFilterChange(e.target.value)}
            />

            {/* Multi-select Tags Filter */}
            <MultiSelect
              options={uniqueTags}
              value={selectedTags}
              onChange={handleTagFilterChange}
              labelledBy="Select Tags"
              className="flex-1 tagsFilter"
              hasSelectAll={false}
              overrideStrings={{ selectSomeItems: "Select Tags" }}
              // isOpen
            />

            <Button className="max-w-fit" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>

          {/* Resources Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            onClick={handleClick}
          >
            {filteredResources.length ? (
              filteredResources.map((resource) => (
                <ResourceCard {...resource} />
              ))
            ) : (
              <p className="para-md mt-3">No matching results found.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
