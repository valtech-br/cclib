# @br-fe/cclib

Common components library to be used with Valtech´s FE Boilerplate


## Install and config

**1)** Install it as a dependency in your project

```bash
npm install git+ssh://git@gitlab-cc.valtech.com:samuel.leal/cclib#master

# or

yarn add git+ssh://git@gitlab-cc.valtech.com:samuel.leal/cclib#master
```

**2)** Import the library into your *main.js* file and pass it into your Vue instance, as below:

```bash
import cclib from 'cclib'

(...)

const root = new Vue({
  components: {
    ...components,
    ...cclib
  },
  (...)
})

```

**3)** Import library stylesheet at the top of your project's *main.scss* file


```bash
@import '~cclib/dist/css/cclib';

```

And that's all!

## Usage

**1)** Import the component. There are three ways of doing this.

&nbsp;&nbsp; *a)* Directly using chosen component's tag into hbs file.

&nbsp;&nbsp; *b)* Copy the components folder from node_modules/cclib/prototype/components into your Fractal's project.

&nbsp;&nbsp; *c)* Import the component directly into Vue files, as folow:

```bash
# import the library into the .vue file, at the top of the script tag:
import cclib from 'cclib'

(...)

# import the desired component in the components section:
components: {
  componentName: cclib.componentName
}

(...)

# Use the component tag in the template area:
<component-name class="component-name--styling-class">
```

**3)** Apply and/or customize component's styling classes (details on component documentation). All class customization can be made directly in your project's src/styles *.scss* files.


## Development

If you want to create new components, or change the existing ones, just run the server, do your stuff, and the build the package for distribution.


```bash
npm run dev # starts Fractal's UI at port 3004 and and watch for changes

# or

yarn dev # starts Fractal's UI at port 3004 and and watch for changes

```

```bash
yarn build # build for distribution
```

#### Component development good practices

- Never use ```!important``` in sass variables
- ...

#### Todo's
- [ ] Finish development good practices
- [ ] More details on simple-btn documentation (links)
- [ ] ...