import { currentUser } from "@clerk/nextjs/server";

export default async function AdminDashboard() {
  const user = await currentUser();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        أهلا بيك أ/ {user?.firstName} 🫡
      </h1>
      <p className="text-lg font-semibold">
        أنت ألان تسطيع فعل ما تريده في اكاديمية كورسات.
      </p>
    </div>
  );
}
