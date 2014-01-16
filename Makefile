sass:
	sass --scss sass/:public/css

watch:
	sass --watch --scss sass/app.scss:public/css/app.css

install: node
	sudo apt-get update
	sudo apt-get install git
	sudo apt-get install clang
	git submodule update --init
	sudo apt-get -y install libseccomp-dev
	cd deps/playpen && make


nodejs:
	sudo apt-get install -y python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

init:
	./init.sh


.PHONY: sass