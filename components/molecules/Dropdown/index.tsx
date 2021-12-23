import React from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import { HamburgerMenuIcon, DotFilledIcon, CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownContent } from "../../atoms/Dropdown/Content";
import DropdownItem, { DropdownCheckboxItem, DropdownRadioItem, DropdownTriggerItem } from "../../atoms/Dropdown/Item";
import DropdownSeparator from "../../atoms/Dropdown/Separator";
import DropdownIndicator from "../../atoms/Dropdown/Indicator";
import DropdownLabel from "../../atoms/Dropdown/Label";
import DropdownArrow from "../../atoms/Dropdown/Arrow";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: mauve.mauve11,
  ":focus > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 35,
  width: 35,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

// TODO: this component is still a mess,copy+pasted from docs, need to refactor, restyle, and make controlled
export const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownContent sideOffset={5}>
          <DropdownItem>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownItem>
          <DropdownItem>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownItem>
          <DropdownItem disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownItem>
          <DropdownMenu>
            <DropdownTriggerItem>
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </DropdownTriggerItem>
            <DropdownContent sideOffset={2} alignOffset={-5}>
              <DropdownItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownItem>
              <DropdownItem>Create Shortcut…</DropdownItem>
              <DropdownItem>Name Window…</DropdownItem>
              <DropdownSeparator />
              <DropdownItem>Developer Tools</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
          <DropdownSeparator />
          <DropdownCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            <DropdownIndicator>
              <CheckIcon />
            </DropdownIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </DropdownCheckboxItem>
          <DropdownCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <DropdownIndicator>
              <CheckIcon />
            </DropdownIndicator>
            Show Full URLs
          </DropdownCheckboxItem>
          <DropdownSeparator />
          <DropdownLabel>People</DropdownLabel>
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownRadioItem value="pedro">
              <DropdownIndicator>
                <DotFilledIcon />
              </DropdownIndicator>
              Pedro Duarte
            </DropdownRadioItem>
            <DropdownRadioItem value="colm">
              <DropdownIndicator>
                <DotFilledIcon />
              </DropdownIndicator>
              Colm Tuite
            </DropdownRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownArrow />
        </DropdownContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuDemo;
