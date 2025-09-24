import { Flex } from "@/components/flex";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { useTheme } from "styled-components";
import { Usage } from "../components/usage";

export const Selects = () => {
  const theme = useTheme();
  return (
    <Flex gap={4}>
      <Title level={2}>Select</Title>
      <Usage
        title="base"
        components={
          <>
            <Select
              label="Select an option"
              placeholder="Select an option"
              options={[
                { key: "one", label: "One" },
                { key: "two", label: "Two" },
                { key: "three", label: "Three" },
                { key: "four", label: "Four" },
                { key: "five", label: "Five" },
                { key: "six", label: "Six" },
                { key: "seven", label: "Seven" },
                { key: "eight", label: "Eight" },
                { key: "nine", label: "Nine" },
                { key: "ten", label: "Ten" },
                { key: "eleven", label: "Eleven" },
                { key: "twelve", label: "Twelve" },
                { key: "thirteen", label: "Thirteen" },
                { key: "fourteen", label: "Fourteen" },
                { key: "fifteen", label: "Fifteen" },
              ]}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Select
              label="Select an option"
              placeholder="Select an option"
              options={[
                { key: "1", label: "One" },
                { key: "2", label: "Two" },
                { key: "3", label: "Three" },
                { key: "4", label: "Four" },
                { key: "5", label: "Five" },
                { key: "6", label: "Six" },
                { key: "7", label: "Seven" },
                { key: "8", label: "Eight" },
                { key: "9", label: "Nine" },
                { key: "10", label: "Ten" },
                { key: "11", label: "Eleven" },
                { key: "12", label: "Twelve" },
                { key: "13", label: "Thirteen" },
                { key: "14", label: "Fourteen" },
                { key: "15", label: "Fifteen" },
              ]}
            />`)
        }
        orientation="vertical"
      />
      <Usage
        title="custom option"
        components={
          <>
            <Select
              label="Custom options"
              placeholder="Select an option"
              CustomOption={({ option, handleChange }) => (
                <Flex
                  key={option.key}
                  direction="row"
                  align="center"
                  gap={1}
                  onClick={() => handleChange(option)}
                  px={1.5}
                  py={1}
                  height="calc(28px + 1rem)"
                  hoverstyle={{
                    backgroundColor: theme.palette.primary.light,
                  }}
                >
                  {option.data?.picture && (
                    <img
                      src={option.data.picture}
                      alt="profile"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <Text size="14" align="left">
                    {option.label}
                  </Text>
                </Flex>
              )}
              options={[
                {
                  key: "julien",
                  label: "Julien",
                  data: {
                    picture: `https://media.licdn.com/dms/image/v2/D4E03AQHRRXnWgQS85g/profile-displayphoto-shrink_200_200/B4EZUUgIobHUAc-/0/1739805723754?e=1761177600&v=beta&t=sXatBtnILliwMWY3zqh_rbhJjsQkBlRDdSD1F3T-M7o`,
                  },
                },
                {
                  key: "toinon",
                  label: "Toinon",
                  data: {
                    picture: `https://media.licdn.com/dms/image/v2/D5603AQGIVxiPe71JyA/profile-displayphoto-shrink_800_800/B56ZaF7X6lGoAg-/0/1746003657244?e=1761177600&v=beta&t=kSL820IMPZqk_hUIEZk8t0p5Udz4Ueo57GCfBld_R8w`,
                  },
                },
                {
                  key: "kevin",
                  label: "Kevin",
                  data: {
                    picture: `https://media.licdn.com/dms/image/v2/D4D03AQEhB2N4VciIow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692021967212?e=1761177600&v=beta&t=uVT6nd3rcNVwM5T269mrdDegH57JyECQPVXggxGhjoc`,
                  },
                },
                {
                  key: "gael",
                  label: "Gael",
                  data: {
                    picture: `https://media.licdn.com/dms/image/v2/D5603AQFsjD56fDiAgg/profile-displayphoto-scale_200_200/B56ZgO3vD3HQAc-/0/1752596149158?e=1761177600&v=beta&t=cYkZgWqqbCqf2m-c_-EmX1CVsd9PWYdFpSP3kGA8vhU`,
                  },
                },
                {
                  key: "nathan",
                  label: "Nathan",
                  data: {
                    picture: `https://media.licdn.com/dms/image/v2/D4E03AQGuT7Ob8gHpdw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668519282559?e=1761782400&v=beta&t=adA7kPFLwvqx61_b49DmSqKPrUpg3KOhrGrmcpmWIJU`,
                  },
                },
                {
                  key: "violette",
                  label: "Violette",
                  data: {
                    picture: `https://media.licdn.com/dms/image/v2/D4E03AQG0OQgluP9CpA/profile-displayphoto-shrink_200_200/B4EZY_DJ0WHMAc-/0/1744814513911?e=1761782400&v=beta&t=v1wGtnPBB5cIss7Qsm52ztB4QwXinwEbZwoc4-Z-Zp0`,
                  },
                },
                {
                  key: "chloe",
                  label: "Chloe",
                  data: {
                    picture: `https://media.licdn.com/dms/image/v2/D4E03AQGoZ5l80f6a-g/profile-displayphoto-shrink_200_200/B4EZaHFJ9DIAAc-/0/1746022998240?e=1761782400&v=beta&t=ZlFhK55zCbPb38UqulEMI4IZ6orHsb0Pv-DKKr5mnLI`,
                  },
                },
              ]}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Select
              label="Custom options"
              placeholder="Select an option"
              CustomOption={({ option, handleChange }) => (
                <Flex
                  key={option.key}
                  direction="row"
                  align="center"
                  gap={1}
                  onClick={() => handleChange(option)}
                  px={1.5}
                  py={1}
                  hoverstyle={{
                    backgroundColor: theme.palette.primary.light,
                  }}
                >
                  {option.data?.picture && (
                    <img
                      src={option.data.picture}
                      alt="profile"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <Text size="14" align="left">
                    {option.label}
                  </Text>
                </Flex>
              )}
              options={[
                {
                  key: "julien",
                  label: "Julien",
                  data: {
                    picture: 'https://media.licdn.com/dms/image/v2/D4E03AQHRRXnWgQS85g/profile-displayphoto-shrink_200_200/B4EZUUgIobHUAc-/0/1739805723754?e=1761177600&v=beta&t=sXatBtnILliwMWY3zqh_rbhJjsQkBlRDdSD1F3T-M7o',
                  },
                },
                {
                  key: "toinon",
                  label: "Toinon",
                  data: {
                    picture: 'https://media.licdn.com/dms/image/v2/D5603AQGIVxiPe71JyA/profile-displayphoto-shrink_800_800/B56ZaF7X6lGoAg-/0/1746003657244?e=1761177600&v=beta&t=kSL820IMPZqk_hUIEZk8t0p5Udz4Ueo57GCfBld_R8w',
                  },
                },
                {
                  key: "kevin",
                  label: "Kevin",
                  data: {
                    picture: 'https://media.licdn.com/dms/image/v2/D4D03AQEhB2N4VciIow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692021967212?e=1761177600&v=beta&t=uVT6nd3rcNVwM5T269mrdDegH57JyECQPVXggxGhjoc',
                  },
                },
                {
                  key: "gael",
                  label: "Gael",
                  data: {
                    picture: 'https://media.licdn.com/dms/image/v2/D5603AQFsjD56fDiAgg/profile-displayphoto-scale_200_200/B56ZgO3vD3HQAc-/0/1752596149158?e=1761177600&v=beta&t=cYkZgWqqbCqf2m-c_-EmX1CVsd9PWYdFpSP3kGA8vhU',
                  },
                },
              ]}
            />`)
        }
        orientation="vertical"
      />
    </Flex>
  );
};
