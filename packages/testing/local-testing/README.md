docker build .

docker tag <image-id> ui-template-gallery/local-testing

docker run -it -v C:\DX\src\devextreme-ui-template-gallery-fork\packages\testing\:/testing-root ui-template-gallery/local-testing

Then in container:

cd testing-root

node runner.js
