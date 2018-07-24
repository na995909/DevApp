import axios from "axios";

const api = {
  
  update: function() {
    console.log("API update call");
    return axios.get("/api/update");
  },
  // Retrieves saved projects from the db
  getProjects: function() {
    return axios.get("/api/saved");
  },

  getProjectsBy: function(category) {
    return axios.get("/api/saved/"+category);
  }
  
};

export default api;