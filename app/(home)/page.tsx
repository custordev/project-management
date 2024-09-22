import { AnimatedAvatars } from "@/components/global/avatar-circles";
import { CustomLinkButton } from "@/components/global/CustomLinkButton";

import StarRating from "@/components/global/StarRating";

import { FAQ } from "@/components/FAQ";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // const { data: session } = useSession();
  // console.log(session?.user);
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl py-16 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build it over the weekend and launch on Monday.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-4">
            This Next Js Boilerplate is a comprehensive and modern starting
            point, packed with all the features you need to quickly build your
            SaaS, AI tool, or any web app, helping you make your first earnings
            online faster.
          </p>
          <CustomLinkButton title="Go to Dashboard" href="/dashboard" />
          <div className="pt-8 pb-4 flex items-center  justify-center gap-8">
            <div className="">
              <AnimatedAvatars />
            </div>
            <div className="">
              <StarRating count={5} />
              <p className="dark:text-slate-900">785 founders sleep better</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="py-8">
          <FAQ />
        </div>
      </div>
    </main>
  );
}
