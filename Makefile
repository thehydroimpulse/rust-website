sass:
	sass --scss sass/:public/css

watch:
	sass --watch --scss sass/app.scss:public/css/app.css

.PHONY: sass