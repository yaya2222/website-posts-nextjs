import Post from "@/types/Post";
import Image from "next/image";
import Link from "next/link";

const PostCard = (props: Post) => {
  const { id, title, body } = props;
  return (
    <li className="rounded-lg shado-lg bg-neutral-700">
      <Image
        src={
          "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg?w=996&t=st=1699735708~exp=1699736308~hmac=bb2d983bff390e30be2c6c7561208a35c06ad308750da9b93238ead976637a9b"
        }
        width="600"
        height="400"
        alt={`post ${id}`}
        className="rounded-t-lg"
      />
      <Link href={`/posts/${id}`}>
        <div className="p-4">
          <h4 className="text-xl text-neutral-50 font-medium">{title}</h4>
          <p className="text-neutral-300">{body.slice(0,50)}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
