import Image from "next/image";
import img from "../../public/img.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}

      <section className="flex gap-36 items-center mt-48 mx-28">
        {/* Left Side, Text Present */}
        <div>
          <h1 className="font-bold text-3xl">
            <span className="text-orange-500">Hi There,</span> I'm Muhammad
            Awais
          </h1>

          <p className="text-gray-600">
            I'm a Full Stack Web Developer with a strong focus on building
            dynamic, responsive, and user-friendly web applications.Full Stack
            Web Developer with a strong focus on building dynamic, responsive,
            and user-friendly web applications. Full Stack Web Developer with a
            strong focus on building dynamic, responsive, and user-friendly web
            applications.Full Stack Web Developer with a strong focus on
            building dynamic, responsive, and user-friendly web applications.
          </p>

          <button className="bg-gray-900 text-white py-2 px-8 mt-4 shadow-lg shadow-gray-600">
            View My Work
          </button>
        </div>

        {/* Right Side, Image Present */}
        <div className="flex-none shadow-lg shadow-gray-600">
          {/* Step 01 */}
          {/* <img src="/img.jpg" alt="laptop image" width="400" height="400" />
          Here no need to import :
          import Image from "next/image";
          import img from "../../public/img.jpg";         
          */}

          {/* Step 02 */}
          <Image src={img} alt={"laptop image"} height={350} width={350} />
        </div>
      </section>

      <br />
      <button className="bg-gray-900 text-white py-2 px-8 mt-4 shadow-lg shadow-gray-600 mx-28">
        <Link href="http://localhost:3000/grid" target="blank">
          View Grid Concept
        </Link>
      </button>
    </main>
  );
}
