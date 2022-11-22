docker build .
docker run -it -v C:\DX\src\devextreme-ui-template-gallery-fork\packages\testing\:/testing-root devextreme/local-testing

cd testing-root
node runner.js
