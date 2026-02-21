import { Flex } from "@/components/flex";
import { Image } from "@/components/image";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const Images = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Image</Title>

      <Usage
        title="base"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Image
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=200&fit=crop"
              alt="book"
              width="200"
              height="150"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Image src="..." alt="..." width="200" height="150" />`,
          )
        }
      />

      <Usage
        title="interactive styles"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Image
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop"
              alt="nature"
              width="200"
              height="150"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              hoverstyle={{
                transform: "scale(1.05)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              pressstyle={{
                transform: "scale(0.95)",
              }}
            />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Image
  src="..."
  hoverstyle={{ transform: "scale(1.05)" }}
  pressstyle={{ transform: "scale(0.95)" }}
/>`,
          )
        }
      />
    </Flex>
  );
};
