import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import OrgSwitcher from "@/components/org-switcher";
import ProjectList from "./_components/project-list";
import UserIssues from "./_components/user-issues";
import { getOrganization } from "@/actions/organization";

export default async function OrganizationPage({ params }) {
  const { orgId } = params;
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const organization = await getOrganization(orgId);

  if (!organization) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Organization not found</h2>
          <p className="mt-2 text-gray-600">The organization you're looking for doesn't exist or you don't have access.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {organization.name}
              </h1>
              <p className="text-gray-500 mt-1">Projects and Activities Dashboard</p>
            </div>
            <OrgSwitcher />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-500 rounded mr-3"></span>
                Projects
              </h2>
              <ProjectList orgId={organization.id} />
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-green-500 rounded mr-3"></span>
                My Issues
              </h2>
              <UserIssues userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}