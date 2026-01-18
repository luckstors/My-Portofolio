import Image from "next/image";
import Link from "next/link"
import { getAllPost } from "@/lib/api";
import Postlist from "@/components/Postlist"


export default async function Page() {

  const posts = await getAllPost();

  return (
    <>
    <div className="main-heading">
      <h2>Daftar Porto</h2>
      <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nisi repellat, perferendis amet esse magnam. Quisquam iusto deserunt eligendi in molestias maiores placeat quidem tempore, incidunt praesentium tempora sapiente inventore?</p>
    </div>
    
    <Postlist posts={posts}/>
    </>
  );
}
