import { Flex } from "@/components/flex";
import { HamburgerIcon } from "@/components/icons";
import { BellIcon } from "@/components/icons/bell";
import { CheckIcon } from "@/components/icons/check";
import { CopyIcon } from "@/components/icons/copy";
import { DotsIcon } from "@/components/icons/dots";
import { HeartIcon } from "@/components/icons/heart";
import { SendHorizontalIcon } from "@/components/icons/send-horizontal";
import { SparklesIcon } from "@/components/icons/sparkles";
import { SyncIcon } from "@/components/icons/sync";
import { Title } from "@/components/title";
import { useState } from "react";
import { Usage } from "../components/usage";

export const Icons = () => {
  const [checkIcon, setCheckIcon] = useState(true);
  const [hamburgerIcon, setHamburgerIcon] = useState(true);
  const [heartIcon, setHeartIcon] = useState(true);
  const [bellIcon, setBellIcon] = useState(true);
  const [syncIcon, setSyncIcon] = useState(true);
  const [sparklesIcon, setSparklesIcon] = useState(true);
  const [dotsIcon, setDotsIcon] = useState(true);
  const [copyIcon, setCopyIcon] = useState(false);
  const [sendIcon, setSendIcon] = useState(true);

  return (
    <Flex gap={4}>
      <Title level={2}>Icon</Title>

      <Usage
        title="static"
        components={
          <>
            <CheckIcon isVisible={true} />
            <HamburgerIcon isOpen={true} />
            <HeartIcon isLiked={true} />
            <BellIcon hasNotification={true} />
            <SyncIcon isSyncing={true} />
            <SparklesIcon animated={false} />
            <CopyIcon animated={false} />
            <DotsIcon animated={false} />
            <SendHorizontalIcon animated={false} />
          </>
        }
        orientation="horizontal"
        onCopy={() => navigator.clipboard.writeText(`<CheckIcon isVisible={true} />`)}
      />
      <Usage
        title="animated"
        components={
          <>
            <CheckIcon
              isVisible={checkIcon}
              animated
              onClick={() => {
                setCheckIcon(false);
                setTimeout(() => {
                  setCheckIcon(true);
                }, 50);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <HamburgerIcon
              isOpen={hamburgerIcon}
              animated
              onClick={() => {
                setHamburgerIcon(!hamburgerIcon);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <HeartIcon
              isLiked={heartIcon}
              animated
              onClick={() => {
                setHeartIcon(!heartIcon);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <BellIcon
              hasNotification={bellIcon}
              animated
              onClick={() => {
                setBellIcon(false);
                setTimeout(() => {
                  setBellIcon(true);
                }, 50);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <SyncIcon
              isSyncing={syncIcon}
              animated
              onClick={() => {
                setSyncIcon(false);
                setTimeout(() => {
                  setSyncIcon(true);
                }, 50);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <SparklesIcon
              animated={sparklesIcon}
              onClick={() => {
                setSparklesIcon(!sparklesIcon);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <DotsIcon
              animated={dotsIcon}
              onClick={() => {
                setDotsIcon(!dotsIcon);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <SendHorizontalIcon
              animated={sendIcon}
              onClick={() => {
                setSendIcon(!sendIcon);
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <CopyIcon
              isCopied={copyIcon}
              animated
              onClick={() => {
                setCopyIcon(true);
                setTimeout(() => setCopyIcon(false), 2000);
              }}
              style={{
                cursor: "pointer",
              }}
            />
          </>
        }
        orientation="horizontal"
        onCopy={() =>
          navigator.clipboard.writeText(`<CheckIcon
              isVisible={checkIcon}
              animated
              onClick={() => {
                setCheckIcon(false);
                setTimeout(() => {
                  setCheckIcon(true);
                }, 50);
              }}
              style={{
                cursor: "pointer",
              }}
            />`)
        }
      />
    </Flex>
  );
};
