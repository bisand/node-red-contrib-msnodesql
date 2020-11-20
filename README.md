# Node-RED support for SQL server

> **!! WARNING !!**
> This module is in a pre release stage! Any use is at your own risk!
>

Based on [msnodesqlv8](https://www.npmjs.com/package/msnodesqlv8)

## Windows
This library only works with Node versions greater than 10.0, and will most likely only work on Node-RED installed on windows, unless you follow the steps below.

## Linux (x64 only)

if running Node-RED on Linux, the odbc driver needs to be installed as outlined here ODBC 17. Please use version >= 17.5 which has been tested with this library. We are running test suite for Linux on AppVeyor which you can see via the badge at top of this page. Linux distros tested so far are Ubuntu 18.04, Alpine 3.12, Ubuntu 20.04, Debian 10.5 and Fedora 32. The driver also works under windows linux subsystem 2 (WLS).

In order to install it on Linux you will also need to install essential build tools for c++

Ubuntu example:
```bash
sudo apt install build-essential
```
