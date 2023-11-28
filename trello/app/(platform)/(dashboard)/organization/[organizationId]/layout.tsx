import { OrgControl } from "./_components/org-control";

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      <div>{children}</div>
    </>
  );
};

export default OrganizationIdLayout;
