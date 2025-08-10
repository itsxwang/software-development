const path = require("path");

exports.getTerms = (req, res) => {
    res.render(path.join("terms", "terms"), {
        currentPage: "terms",
        pageTitle: "Terms",
        isLoggedIn: req.session.isLoggedIn,
    });
};