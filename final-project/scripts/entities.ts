//entities.ts


class FamousPainter {
	public name: string;
	public style: string;
	public examples: string[];
	public birthplace: string;
	public nationality: string;
	public birthdate: string;

	constructor(painter: FamousPainter) {
		this.name = painter['name'];
		this.style = painter['style'];
		this.examples = painter.examples;
		this.birthplace = painter.birthplace;
		this.nationality = painter.nationality;
		this.birthdate = painter.birthdate;
	}

	public toString(): string {
		return "FamousPainter { " +
			"name: " + this.name + ", " +
			"style:" + this.style + ", " +
			"birthplace: " + this.birthplace + ", " +
			"nationality: " + this.nationality + ", " +
			"birthdate: " + this.birthdate + ", " +
			"examples: " + this.examples +
		"}";
	}
}


class FamousPainters {
	public items : FamousPainter[];

	constructor(painters: FamousPainter[]) {
		this.items = painters;
	}

	public toString(): string {
		var str: string = "FamousPainters {";
			for( var i = 0; i < this.items.length; i++) {
				str = str + "[";
				str = str + this.items[i];
				if (i < this.items.length) {
					str = str + "]";
				}
			}
		str = str + "}";
		return str;
	}
}