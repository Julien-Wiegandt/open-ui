import { Flex } from "@/components/flex";
import { HamburgerIcon } from "@/components/icons";
import { BellIcon } from "@/components/icons/bell";
import { CheckIcon } from "@/components/icons/check";
import { HeartIcon } from "@/components/icons/heart";
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
            <SyncIcon isVisible={true} />
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
              isVisible={syncIcon}
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
