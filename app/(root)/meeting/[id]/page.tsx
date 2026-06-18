




import React from "react";

type MeetingProps = {
  params: Promise<{ id: string }>;
};

const Meeting = async ({ params }: MeetingProps) => {
  const { id } = await params;

  return (
    <div>Meeting Room: #{id}</div>
  );
};

export default Meeting;