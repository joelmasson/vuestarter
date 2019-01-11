import Vue from "vue";

export default {
  getUser(email) {
    return $.ajax({
      type: "get",
      url: "api/public/user/" + email,
      dataType: "JSON"
    });
  }
};