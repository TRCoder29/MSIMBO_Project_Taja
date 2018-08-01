export class Blog {
	_id?: string;
	userId: string;
	title: string;
	entry: string;

	constructor(_id, userId, title, entry) {
	this._id = _id;
	this.userId = userId;
	this.title = title;
	this.entry = entry;
	}
}