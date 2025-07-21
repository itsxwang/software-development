# What is [npm](https://youtu.be/P3aKRdUyr0s?si=0Zv1izWb3Vn2LcHl&t=47)?

- npm, which stands for Node Package Manager, is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. npm allows developers to install, share, and manage dependencies in their projects. It provides a vast repository of open-source packages


- it installs automatically when you install Node.js
- it is used to install packages from the npm registry
- it can be used to manage project dependencies, scripts, and configurations


- **npm registry** is a public repository of open-source packages that can be installed using npm. It is the default source for packages when using npm commands.

- `npm init`: will create a new `package.json` file for the project, which contains metadata about the project and its dependencies. `-y` can be added to skip the prompts and use default values.
- `npm run <script-name>`: will execute a script defined in the `package.json` file.


- `npm install <package-name> -- or npm install <package-name>@<specific-version>`: will install a package (and its dependencies) locally in the current project directory in node modules. `-D` or `--save-dev` can be added to install it as a dev dependency instead of dependency. To be precise npm install newest public release of a package.
We can also `npm i <package-name>` 
Note: if you only write like this: `npm install <package_name>@2` this will install the package with major version 2, and minor and patch versions will be latest. 

- `npm install <package-name> --save`: will install a package and add it to the `dependencies` section of the `package.json` file. By default,npm install using `--save`. 



- `npm install -g <package-name>`: will install a package globally, making it available system-wide.
 


- `npm uninstall <package-name>`: will remove a package from the current project. This will also remove the package from the `node_modules` directory and update the `package.json` file.Dependencies will also be removed. 


- `npm list`: will list all the installed packages in the current project.

- `npm update <package-name>`: will update a package to the latest version.
- npm install <package-name>@~major.minor: will update a package to the latest patch version within the specified major.minor version. For example, if the current version is `1.2.3`, it will update to `1.2.x` where `x` is the latest patch version.

- `npm outdated`: will check for outdated packages in the current project and display their current and latest versions.

- `npm view <package-name> versions`: will list all the versions of a package available in the npm registry.

---
## [demystify package.json](https://youtu.be/P3aKRdUyr0s?si=BQ5EZz5gqC_54oS-&t=287)

- contains metadata about the project, such as its name, version, description, author, license, and dependencies.
- dev dependencies are packages that are only needed during development and testing, while dependencies are packages that are needed for the project to run in production.

- [understand caret symbol in front of version number in package.json](https://youtu.be/P3aKRdUyr0s?si=4r-LsOQrtFjWnjjp&t=677)
  - `^1.2.3`: means that the package will be updated to the latest minor version or patch version (1.x.x) that is compatible with the specified major version (1.0.0). It will not update to a new major version (2.0.0 or higher). Default.
  - `~1.2.3`: means that the package will be updated to the latest patch version (1.2.x) that is compatible with the specified minor version (1.2.0). It will not update to a new minor version (1.3.0 or higher).

- Note: `npm install@latest`can be used to update a package to the latest version, regardless of the version specified in the `package.json` file. This will update the package to the latest version available in the npm registry and update the `package.json` file accordingly.
- `npm install <package-name>@<version>`: will install a specific version of a package. This is useful when you want to use a specific version of a package that is not the latest version.

---
## Package Versioning in npm
- [**Semantic Versioning (SemVer)**](https://youtu.be/P3aKRdUyr0s?si=s2PN3O7zVINVmSbX&t=477): npm uses semantic versioning(Semantic Versioning means that version numbers follow a specific format) to manage package versions. A version number is typically in the format `MAJOR.MINOR.PATCH`, where:
  - [`MAJOR`](https://youtu.be/P3aKRdUyr0s?si=ntJkYuwBYpU0Qx1s&t=557): Incremented for incompatible API changes. Not backward compatible(backward compatible means it will not break older builds). Used for big changes that may break existing code.
  - [`MINOR`](https://youtu.be/P3aKRdUyr0s?si=L4tSHIyL3JU5IMju&t=587): Incremented for backward-compatible functionality.Will not break existing code. Used for adding new features or improvements.
  - [`PATCH`](https://youtu.be/P3aKRdUyr0s?si=GcbfkXiJB8HsWAY4&t=597): Incremented for backward-compatible bug fixes. Smaller bug fixes, won't break older builds(means it will not break existing code). Used for fixing bugs without adding new features.

On new version relaease the digits at right reset back to 0. For example, if a package is at version `1.2.3` and a new feature is added, the new version will be `1.3.0`. If a bug is fixed in the same version, it will become `1.3.1`. If a major change is made that breaks compatibility, the version will become `2.0.0`.

---
[`package.lock.json`](https://youtu.be/P3aKRdUyr0s?si=ERq_2y09Qxq7P3j7&t=767)
- is a file that is automatically generated when you install packages using npm. It contains a snapshot of the entire dependency tree of your project, including the exact versions of all installed packages and their dependencies.
- It ensures that the same versions of packages are installed across different environments, making your project more reproducible and consistent.
- It is recommended to commit the `package-lock.json` file to version control to ensure that all team members and environments use the same package versions.

--- 
- what is npx: 
  - npx(node package executor) is a package runner tool that comes with npm. It allows you to execute packages without having to install them globally or locally in your project.
    - ```npx <package-name>@<version>```: runs a specific version of a package directly from the npm registry without installing it globally or locally.
  - It is useful for running one-off commands or scripts from packages that you don't need to keep installed permanently.
          

  - npx automatically downloads and executes the specified package, making it convenient for running tools and scripts without cluttering your system with global installations.
- npx can be used to run any package from the npm registry, including command-line tools
    - example: `npx create-react-app my-app` will execute the `create-react-app` package to create a new React application named `my-app` without installing it globally.