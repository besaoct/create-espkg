# create-espkg

**`create-espkg`** is a CLI tool designed to streamline the creation of Node.js packages with built-in support for JavaScript/TypeScript and React/Next.js projects. By leveraging esbuild for fast and efficient builds, this tool helps you quickly set up a project with the necessary configuration and dependencies.

**Table of Contents:**

- [create-espkg](#create-espkg)
  - [Installation](#installation)
    - [Global Installation](#global-installation)
    - [Using npx](#using-npx)
  - [Usage](#usage)
    - [Creating a Package](#creating-a-package)
    - [Template Options](#template-options)
    - [Example](#example)
  - [Features](#features)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

### Global Installation

To install `create-espkg` globally, you need Node.js and npm installed on your system. Once you have them, run the following command:

```bash
npm install -g create-espkg
```

This will make the `create-espkg` command available globally on your system.

### Using npx

If you prefer not to install the package globally, you can run `create-espkg` directly using `npx`:

```bash
npx create-espkg
```

This command will run the latest version of `create-espkg` without needing to install it globally.

## Usage

### Creating a Package

To create a new package, run the `create-espkg` command followed by the name of the directory where you want to create the package. If you don't provide a directory name, it will prompt you for a package name and create a folder with that name.

```bash
# Create a new package in a specified directory
create-espkg your-package-name

# Or, simply run the command and it will prompt you for the package name
create-espkg
```

If you're using `npx`, the command will look like this:

```bash
# Create a new package using npx
npx create-espkg your-package-name

# Or, run npx and follow the prompts
npx create-espkg
```

### Template Options

After you initiate the command, you will be prompted to select a template. You can choose from the following options:

1. **`javascript (with types)`**: This template sets up a basic JavaScript project with TypeScript support and includes tools like Jest for testing and esbuild for bundling.

2. **`react/next (with types)`**: This template sets up a React project with Next.js and TypeScript, including all necessary dependencies and dev tools.

### Example

1. Run the command:

    ```bash
    create-espkg
    ```

    or using `npx`:

    ```bash
    npx create-espkg
    ```

2. Provide the requested information (package name, author name, and select a template).

3. The tool will create a new directory with the package name, copy the template files, and install the required dependencies.

4. Your new project is now ready to go!

## Features

- **Efficient Builds**: Utilizes esbuild for fast and efficient builds.
- **Easy Setup**: Quickly generate a boilerplate project with a few commands.
- **Multiple Templates**: Choose between a JavaScript/TypeScript setup or a React/Next.js setup.
- **Automated Dependency Installation**: Automatically installs the latest versions of the required dependencies based on the selected template.
- **Customizable**: Easily modify the templates to fit your specific needs.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/besaoct/create-espkg). You can also fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
