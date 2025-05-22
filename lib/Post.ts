export class Post {
    private id : string    
    private title : string;
    private date : Date;
    private description : string;
    private content : string;
    private image : string;
    private video : string;

    constructor(id: string,title: string, date: Date, description: string, content: string, image: string, video: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description
        this.content = content;
        this.image = image;
        this.video = video;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDate(): Date {
        return this.date;
    }

    public getDescription(): string {
        return this.description;
    }

    public getContent(): string {
        return this.content;
    }

    public getImage(): string {
        return this.image;
    }

    public getVideo(): string {
        return this.video;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public setVideo(video: string): void {
        this.video = video;
    }
}