sass:
	sass --scss sass/:public/css

watch:
	sass --watch --scss sass/app.scss:public/css/app.css

install:
	git submodule update --init
	sudo apt-get -y install libseccomp-dev
	cd deps/playpen && make



.PHONY: sass