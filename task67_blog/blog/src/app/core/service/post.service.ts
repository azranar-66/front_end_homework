import { Post } from '../model';



export class PostService {

  constructor() { }
  data: Array<Post> = [
    {
      id: 1,
      title: "Вася",
      userId: 1,
      date: new Date(),
      prewiewText: "Моя первая статья.",
      fullText: "Моя первая статья. Полный текст",
      picture: "none",
      favorite: true

    }
  ];
  user: Array<string> = ["Вася", "Петя", "коля"];

  create(post: Post) {
    this.data.push(post);
  }
  get(): Array<Post> {
    return this.data;

  }
  remove(post: Post): boolean{
let index = this.data.indexOf(post);
if (index !== -1)
  return Boolean(this.data.splice(index, 1));
return false;
}
getById(id: number): Post{
  let index = this.data.findIndex(function(item:Post){

  });
  return this.data[index];
 
   }
}
