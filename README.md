# openaddresses-explorer

A simple tool to visualize and search in OpenAddresses data sources.

## About

OpenAddresses Explorer is meant to be a static website that can easily be hosted on e.g. Amazon S3 or GitHub Pages.

## Building data file

* First make sure that you have a freshly cloned copy of the [OpenAddresses](https://github.com/openaddresses/openaddresses) repository.
* If necessary, adjust the path to the *sources* folder in the *sources_folder* variable in *package.json*.
* Now grunt `grunt concat` and `data/sources.json` will be generated