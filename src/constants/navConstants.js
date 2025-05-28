const navConstants = {
  HOME: "/",
  EXPERIENCE: "/experience",
  PROJECTS: "/projects",
  ARTICLES: "/articles",
  ARTICLE: "/articles/:id",
  CONTACT: "/contact",
  RESOURCES: "/resources",
  get NAVLINKS() {
    return [
      { label: "Home", path: this.HOME },
      { label: "Work Experience", path: this.EXPERIENCE },
      { label: "Personal Projects", path: this.PROJECTS },
      { label: "Articles", path: this.ARTICLES },
      { label: "Resources", path: this.RESOURCES },
      { label: "Contact", path: this.CONTACT },
    ];
  },
};

export default navConstants;
