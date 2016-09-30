
all:

update:
	npm install spinalcore
	npm install nwjs

run:
	./node_modules/nwjs/nw .

stop:
	kill -9 $$( pgrep -f "./node_modules/nwjs/nw ." )

.PHONY: all update run stop


