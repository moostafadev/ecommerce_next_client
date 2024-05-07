import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface ILink {
  links: {
    name: string;
    link: string;
  }[];
}

export function BreadcrumbDemo({ links }: ILink) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/"}>أكاديمية كورسات</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {links?.map((li, idx) => (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {links.length === idx + 1 ? (
                <BreadcrumbPage>{li.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={li.link}>{li.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
