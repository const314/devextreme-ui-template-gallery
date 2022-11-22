FROM ubuntu:20.04

RUN echo 'APT::Install-Recommends "0";' > /etc/apt/apt.conf.d/dx-no-recommends \
    && apt-get update \
    && apt-get -y upgrade

# https://raw.githubusercontent.com/actions/virtual-environments/main/images/linux/toolsets/toolset-2004.json
# apt.common_packages
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y \
    autoconf \
    automake \
    build-essential \
    dbus \
    dnsutils \
    dpkg \
    fakeroot \
    fonts-noto-color-emoji \
    gnupg2 \
    imagemagick \
    iproute2 \
    iputils-ping \
    lib32z1 \
    libc++abi-dev \
    libc++-dev \
    libcurl4 \
    libgbm-dev \
    libgconf-2-4 \
    libgsl-dev \
    libgtk-3-0 \
    libmagic-dev \
    libmagickcore-dev \
    libmagickwand-dev \
    libsecret-1-dev \
    libsqlite3-dev \
    libtool \
    libunwind8 \
    libxkbfile-dev \
    libxss1 \
    locales \
    mercurial \
    openssh-client \
    p7zip-rar \
    pkg-config \
    python-is-python3 \
    rpm \
    texinfo \
    tk \
    tzdata \
    upx \
    xorriso \
    xvfb \
    xz-utils \
    zsync

# https://raw.githubusercontent.com/actions/virtual-environments/main/images/linux/toolsets/toolset-2004.json
# apt.cmd_packages
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y \
    acl \
    aria2 \
    binutils \
    bison \
    brotli \
    bzip2 \
    coreutils \
    curl \
    file \
    flex \
    ftp \
    haveged \
    jq \
    m4 \
    mediainfo \
    netcat \
    net-tools \
    p7zip-full \
    parallel \
    pass \
    patchelf \
    pollinate \
    rsync \
    shellcheck \
    sphinxsearch \
    sqlite3 \
    ssh \
    sshpass \
    subversion \
    sudo \
    swig \
    telnet \
    time \
    unzip \
    wget \
    zip

RUN apt-get install -y \
    ca-certificates \
    git

# Node
RUN curl -L https://deb.nodesource.com/setup_16.x | bash - \
    && apt install -y nodejs \
    && npm set fetch-retries 5 \
    && npm set audit false \
    && npm set fund false

# Chrome
# Versions: https://www.ubuntuupdates.org/package/google_chrome/stable/main/base/google-chrome-stable
RUN export CHROME_VERSION=106.0.5249.103-1 \
    && curl -L "https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}_amd64.deb" > /tmp/chrome.deb \
    && apt install /tmp/chrome.deb -f -y \
    && unlink /tmp/chrome.deb

# Firefox
# Versions: https://www.ubuntuupdates.org/package/ubuntu_mozilla_security/focal/main/base/firefox
RUN export FIREFOX_VERSION=106.0+build1-0ubuntu0.20.04.1 \
    && curl -L "http://ppa.launchpad.net/ubuntu-mozilla-security/ppa/ubuntu/pool/main/f/firefox/firefox_${FIREFOX_VERSION}_amd64.deb" > /tmp/firefox.deb \
    && apt install /tmp/firefox.deb -f -y \
    && unlink /tmp/firefox.deb

# Utils for docker-ci.sh
RUN apt-get install -y dbus-x11 httping x11vnc xvfb

ENV TERM=xterm \
    DISPLAY=:99 \
    FORCE_COLOR=1

