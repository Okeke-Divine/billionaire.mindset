import Link from "next/link";

export default function Home() {
  interface CourseItem {
    name: string;
    url: string;
  }
  const courses: CourseItem[] = [
    {
      name: "Virtual Assistant Course",
      url: "https://mega.nz/folder/vxUznQ7D#Bv5EVMFKsd-ZIqfypCQEXA",
    },
    {
      name: "Shopify Dropshipping",
      url: "https://mega.nz/folder/fsN3WQbL#gO6oe3z2h1DFMjLbz4B82g",
    },
    {
      name: "WordPress",
      url: "https://mega.nz/folder/bp1WDKYD#DEy_7EgbtfDh-udLoQtD_g",
    },
    {
      name: "SEO",
      url: "https://mega.nz/folder/uwUhCCRR#Yet-bWYTCToIfhkgCum_8w",
    },
    {
      name: "Video Editing",
      url: "https://mega.nz/folder/qo822SwT#xuWlsw7MHBNAjtmb5AF7XQ",
    },
    {
      name: "iOS App Development",
      url: "https://mega.nz/folder/Tld1DSKb#PLZ5wnX0yoDjo04dX7afsg",
    },
    {
      name: "Google Ads",
      url: "https://mega.nz/folder/bo123ATb#6L16Tbc3z47O4KhsIXKkTQ",
    },
    {
      name: "Email Marketing",
      url: "https://mega.nz/folder/jxMjSSpI#hCByLH9Q56fBkzWfc8m0dw",
    },
    {
      name: "Daraz Sellers",
      url: "https://mega.nz/folder/WkMDxaRS#dOg35M0SSu530E6NpfTBoA",
    },
    {
      name: "Content Writing",
      url: "https://mega.nz/folder/zp1yyCqa#Me2EY_K3A2YPWShQ1QO4mg",
    },
    {
      name: "Android App Development",
      url: "https://mega.nz/folder/q1FHUaQa#yMN2iefEwc-F4bUEBPLkOQ",
    },
    {
      name: "Facebook Ads",
      url: "https://drive.google.com/folderview?id=1DMAyUAmBylkE4ZemMbcHJYzNoD0WPgJD",
    },
    {
      name: "Amazon Affiliate Marketing",
      url: "https://mega.nz/folder/ThcHSQiA#sg3hEaulJWAIzGbq39Vjlw",
    },
    {
      name: "3D Animation",
      url: "https://mega.nz/folder/q1M1VSaL#gUQh3V-6FPK6EzVAfX4F7Q",
    },
    {
      name: "Ebay",
      url: "https://mega.nz/folder/j9si0TLZ#4Z_PVRs_lp-F6t9aCHp__w",
    },
    {
      name: "Instagram Marketing",
      url: "https://mega.nz/folder/S4kiVCBZ#7M5uPKD-KdGt0mghEIFWWw",
    },
    {
      name: "Youtube Marketing",
      url: "https://mega.nz/folder/C4VkAZ6R#U5xoymtNJv0uAoC0x72yLQ",
    },
    {
      name: "Graphic Designing V Course",
      url: "https://mega.nz/folder/CwElWCba#T4kYRmEXTBE3_8NbO_OBcw",
    },
  ];
  return (
    <>
      <main className="bg-gray-900  flex justify-center items-center min-h-[100vh] py-5">
        <div className="bg-gray-700 text-white p-10 w-fit rounded-lg">
          <div className="flex justify-center">
            <img
              alt="Classified Course Bundle"
              src="/images/Classified (Course Bundle) - BM.png"
              className="w-[200px] h-[200px] border-2 border-white"
            />
          </div>
          <h1 className="text-4xl pt-5 font-bold">
            Classified (Course Bundle)
          </h1>
          <div className="pb-5">
            brought to you by{" "}
            <Link
              href="https://linktr.ee/billionaire.mindset.41"
              target="_blank"
              className="text-orange-400"
            >
              Billionaire Mindset
            </Link>
          </div>
          <h3 className="mb-2 font-bold text-xl">Here are the courses:</h3>
          {courses.map((course, index) => (
            <li key={index} className="mb-2 list-numbered">
              {course.name} -
              <Link
                href={course.url}
                className="text-orange-400 pl-1"
                target={"_blank"}
              >
                Start Learning
              </Link>
            </li>
          ))}
        </div>
      </main>
    </>
  );
}
