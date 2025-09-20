import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Modal } from "@/components/modal";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { useState } from "react";
import { Usage } from "../components/usage";

export const Modals = () => {
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const [isMediumModalOpen, setIsMediumModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);
  const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

  const Footer = () => (
    <>
      <Button
        color="error"
        variant="text"
        label="Cancel"
        onClick={() => {
          setIsSmallModalOpen(false);
          setIsMediumModalOpen(false);
          setIsLargeModalOpen(false);
          setIsFullScreenModalOpen(false);
        }}
      />
      <Button
        color="default"
        variant="contained"
        label="Submit"
        onClick={() => {
          setIsSmallModalOpen(false);
          setIsMediumModalOpen(false);
          setIsLargeModalOpen(false);
          setIsFullScreenModalOpen(false);
        }}
      />
    </>
  );

  const SmallModal = () => {
    return (
      <Modal
        size="sm"
        isOpen={isSmallModalOpen}
        title="Create your account"
        onClose={() => setIsSmallModalOpen(false)}
        footer={<Footer />}
      >
        <Flex width="100%" height="100%">
          <Text size="16" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
            porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna
            aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
            sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod.
          </Text>
        </Flex>
      </Modal>
    );
  };

  const MediumModal = () => {
    return (
      <Modal
        size="md"
        isOpen={isMediumModalOpen}
        title="Create your account"
        onClose={() => setIsMediumModalOpen(false)}
        footer={<Footer />}
      >
        <Flex width="100%" height="100%">
          <Text size="16" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
            porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna
            aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
            sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod.
          </Text>
        </Flex>
      </Modal>
    );
  };

  const LargeModal = () => {
    return (
      <Modal
        size="lg"
        isOpen={isLargeModalOpen}
        title="Create your account"
        onClose={() => setIsLargeModalOpen(false)}
        footer={<Footer />}
      >
        <Flex width="100%" height="100%">
          <Text size="16" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
            porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna
            aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
            sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod.
          </Text>
        </Flex>
      </Modal>
    );
  };

  const FullScreenModal = () => {
    return (
      <Modal
        fullScreen
        isOpen={isFullScreenModalOpen}
        title="Create your account"
        onClose={() => setIsFullScreenModalOpen(false)}
        footer={<Footer />}
      >
        <Flex width="100%" height="100%">
          <Text size="16" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
            porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna
            aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
            sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod.
          </Text>
        </Flex>
      </Modal>
    );
  };

  return (
    <Flex gap={4}>
      <Title level={2}>Modal</Title>
      <MediumModal />
      <SmallModal />
      <LargeModal />
      <FullScreenModal />

      <Usage
        title="usage"
        components={
          <>
            <Button
              color="default"
              variant="contained"
              label="open modal"
              onClick={() => setIsMediumModalOpen(true)}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Modal
        size="md"
        isOpen={isMediumModalOpen}
        title="Create your account"
        onClose={() => setIsMediumModalOpen(false)}
        footer={<Footer />}
      >
        <Flex width="100%" height="100%">
          <Text size="16" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
            porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna
            aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
            sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod.
          </Text>
        </Flex>
      </Modal>`)
        }
      />
      <Usage
        title="sizes"
        components={
          <>
            <Button
              color="default"
              variant="contained"
              label="sm"
              onClick={() => setIsSmallModalOpen(true)}
            />
            <Button
              color="default"
              variant="contained"
              label="md"
              onClick={() => setIsMediumModalOpen(true)}
            />
            <Button
              color="default"
              variant="contained"
              label="lg"
              onClick={() => setIsLargeModalOpen(true)}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Modal
        size="sm"
        isOpen={isSmallModalOpen}
        title="Create your account"
        onClose={() => setIsSmallModalOpen(false)}
        footer={<Footer />}
      >
        <Flex width="100%" height="100%">
          <Text size="16" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
            porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna
            aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
            sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod.
          </Text>
        </Flex>
      </Modal>`)
        }
      />
      <Usage
        title="fullscreen"
        components={
          <>
            <Button
              color="default"
              variant="contained"
              label="fullscreen"
              onClick={() => setIsFullScreenModalOpen(true)}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Modal
        fullScreen
        isOpen={isFullScreenModalOpen}
        title="Create your account"
        onClose={() => setIsFullScreenModalOpen(false)}
        footer={<Footer />}
      >
        <Flex width="100%" height="100%">
          <Text size="16" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
            porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna
            aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod
            sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod.
          </Text>
        </Flex>
      </Modal>`)
        }
      />
    </Flex>
  );
};
