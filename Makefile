
all:

update:
	npm install spinalcore
	npm install nw

run:
	./node_modules/.bin/nw .

stop:
	kill -9 $$( pgrep -f "./node_modules/.bin/nw ." )

init:
	@true

.PHONY: all update run stop init


