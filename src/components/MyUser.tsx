import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MyUser() {
  const session = useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to home page
        },
      },
    });
  };
  return (
    <Menubar className="border-0 shadow-none">
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage
              src={
                session.data?.user.image
                  ? session.data?.user.image
                  : "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>
              {session.data?.user.name
                .split(" ")
                .map((e) => e[0].toUpperCase())}
            </AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent align="center">
          <MenubarItem onClick={handleSignOut}>
            Log Out
            <MenubarShortcut>
              <LogOut />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
