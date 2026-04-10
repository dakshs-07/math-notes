import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function AddNotes(){
    return (
      <div className="fixed bottom-3 left-3 z-50">
        <Link href="/admin">
          <button className="flex text-xl tracking-wide items-center gap-2 bg-amber-400 py-4 px-2 rounded-sm cursor-pointer hover:text-black hover:bg-gray-400">
            UPLOAD NOTES <PlusIcon size={25} />
          </button>
        </Link>
      </div>
    );
}