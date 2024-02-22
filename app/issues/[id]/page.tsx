import { notFound } from "next/navigation";
import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Grid columns={{initial: "1", md: "2"}} gap="5">
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <EditIssueButton issueId={issue.id} />
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailPage;