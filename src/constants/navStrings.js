const navConstants = {
  HOME: "/",
  RESOURCES: "/resources",
  get NAVLINKS() {
    return [
      { label: "Home", path: this.HOME },
      // { label: "Resources", path: this.RESOURCES },
    ];
  },
};

export default navConstants;
