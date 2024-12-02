import Button from "./Button";

const projects = [
  {
    title: "Aimer Candles",
    subtitle: "eCommerce Website + PWA",
    image: "images/aimer-candles.netlify.app_.png",
    link: "https://aimer-candles.netlify.app",
    githubLink: "",
    description: [
      "Progressive Web App (PWA): Installable as an app for a seamless, native-like experience.",
      "Secure Authentication: Firebase Authentication for safe login and registration",
      "Responsive Design: Optimized for all screen sizes and devices.",
      "Dynamic Theme: Toggle between dark and light modes for personalized browsing.",
      "Product and Collection Management: Display of products and collections with categorized views, showcasing New Arrivals and Best Sellers section.",
      "Product Filters: Advanced filtering by categories, New Arrivals , and more for quick search.",
      "Cart System: State-managed cart functionality using Redux.",
      "Content Integration: Integrated blog section for sharing product stories, tips, and updates.",
      "Performance Optimized: Fast-loading, offline support, and scalable architecture.",
    ],
  },
  {
    title: "ReadMe",
    subtitle: "News Website + PWA",
    image: "images/readme-news.netlify.app_.png",
    link: "https://readme-news.netlify.app",
    githubLink: "https://github.com/shubhamsalunkhe16/readme_news",
    description: [
      "News Feed: Used fake news API for demonstration purposes to fetch news from various categories (e.g. technology, business, sports, etc.).",
      "Category Filtering: Users can browse news based on predefined categories.",
      "Dark/Light Mode: Integrated themes for user comfort.",
      "Responsive Design: Fully optimized for desktops, tablets, and mobile devices.",
      "Article Previews: Compact cards display headline, image, and brief description.",
      "Add to Home Screen: Install the app on any device for a native-like experience.",
    ],
  },
];

const Projects = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section class="overflow-hidden py-8">
      <p class="text-4xl lg:text-5xl xl:text-6xl mt-2 font-bold tracking-tight text-text-primary text-center underline border-t-2 border-text-secondary pt-8">
        PROJECTS
      </p>
      <div class="mx-auto w-full">
        {projects?.map(
          ({ title, subtitle, description, link, githubLink, image }) => (
            <div class="mx-auto grid w-full grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1">
              <div class="pt-10">
                <div class="w-full">
                  <h2 class="text-base font-semibold leading-7 text-primary">
                    {subtitle}
                  </h2>
                  <p class="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                    {title}
                  </p>
                  <dl class="mt-5 w-full space-y-3 text-sm md:text-base leading-7 text-text-secondary lg:max-w-none">
                    {description?.map((desc) => (
                      <div class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            class="absolute left-1 top-1 h-5 w-5 text-primary"
                          >
                            <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                            <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                            <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                          </svg>
                        </dt>
                        <dd class="inline">{desc}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div class="mt-5 flex items-center gap-3 flex-col min-[450px]:flex-row min-[450px]:gap-6">
                  {!!githubLink && (
                    <Button onClick={() => openLink(githubLink)}>
                      View Source Code
                    </Button>
                  )}
                  <Button onClick={() => openLink(link)}>Live Demo</Button>
                </div>
              </div>
              <img
                src={image}
                alt="Product screenshot"
                class="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
                width="2432"
                height="1442"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
