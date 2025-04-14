"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { OrganizationList, useOrganization } from "@clerk/nextjs";

export default function Onboarding() {
  const { organization } = useOrganization();
  const router = useRouter();

  useEffect(() => {
    if (organization?.slug) {
      handleOrganizationRedirect(organization.slug);
    }
  }, [organization]);

  const handleOrganizationRedirect = (slug) => {
    router.push(`/organization/${slug}`);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md text-center">
        <OrganizationList
          hidePersonal
          afterCreateOrganizationUrl="/organization/:slug"
          afterSelectOrganizationUrl="/organization/:slug"
        />
      </div>
    </section>
  );
}
