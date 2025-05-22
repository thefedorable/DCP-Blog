import Header from "@/components/main/header";
import DisplayPost from "@/components/pages/DisplayPost";
import { Post } from "@/lib/Post";
import { TestData } from "./TestPost";
import Footer from "@/components/main/footer";

export default function Home() {
  const testData: TestData = new TestData();
  const testPost: Post = testData.getTestPost();

  return (
    <div className="bg-background">
      <Header />
      <DisplayPost post={testPost}/>
      <Footer />
    </div>
  );
}