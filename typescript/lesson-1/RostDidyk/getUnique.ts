function checkPosition(item: string|number, pos: number, self: (string|number)[]){
    return self.indexOf(item) == pos;
}

function getUnique( ...args: (string|number)[] ): (string|number)[] {
   return args.filter(checkPosition);
}

console.log(getUnique(1,2,3,'test',1,2,3, 't','3')); // [ 1, 2, 3, 'test', 't', '3' ]

