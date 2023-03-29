import React from "react";
// //MUI
import InboxIcon from "@mui/icons-material/Inbox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SendIcon from "@mui/icons-material/Send";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Grid, Button } from "@mui/material";

///newMIU
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import Label from "@mui/icons-material/Label";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const MenuItem = () => {
  const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      "&.Mui-expanded": {
        fontWeight: theme.typography.fontWeightRegular,
      },
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: "var(--tree-view-color)",
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: "inherit",
        color: "inherit",
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 0,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(2),
      },
    },
  }));

  function StyledTreeItem(props) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      ...other
    } = props;
    return (
      <StyledTreeItemRoot
        label={
          <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: "inherit", flexGrow: 1 }}
            >
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        }
        style={{
          "--tree-view-color": color,
          "--tree-view-bg-color": bgColor,
        }}
        {...other}
      />
    );
  }

  StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
  };
  return (
    // <div className="Menu-item">
    //   <Grid container lg={12} md={12} sm={12} xs={12} item spacing={4}>
    //     <Grid item lg={12} md={12} sm={12} xs={12}>
    //       <Button variant="outlined">
    //         <AddOutlinedIcon /> New Mail
    //       </Button>
    //     </Grid>
    //     <Grid item lg={12} md={12} sm={12} xs={12}>
    //       <InboxIcon /> Inbox
    //     </Grid>
    //     <Grid item lg={12} md={12} sm={12} xs={12}>
    //       <StarOutlineIcon /> Starred
    //     </Grid>
    //     <Grid item lg={12} md={12} sm={12} xs={12}>
    //       <SendIcon /> SendItem
    //     </Grid>
    //     <Grid item lg={12} md={12} sm={12} xs={12}>
    //       <FileOpenOutlinedIcon /> Draft
    //     </Grid>
    //     <Grid item lg={12} md={12} sm={12} xs={12}>
    //       <FolderOutlinedIcon /> Junk mail
    //     </Grid>
    //   </Grid>
    // </div>
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        <TreeView
          aria-label="gmail"
          defaultExpanded={["3"]}
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpandIcon={<ArrowRightIcon />}
          defaultEndIcon={<div style={{ width: 5 }} />}
          sx={{ height: 564, flexGrow: 1, maxWidth: 300, overflowY: "auto" }}
        >
          <Button variant="outlined" style={{ width: "100%" }}>
            <AddOutlinedIcon /> New Mail
          </Button>
          <StyledTreeItem
            nodeId="1"
            labelInfo="3,566"
            labelText="Inbox"
            labelIcon={InboxIcon}
          />
          <StyledTreeItem
            nodeId="2"
            labelText="Starred"
            labelIcon={StarOutlineIcon}
          />
          <StyledTreeItem
            nodeId="3"
            labelText="SendItem"
            labelIcon={SendIcon}
          />
          <StyledTreeItem
            nodeId="4"
            labelText="Draft"
            labelIcon={FileOpenOutlinedIcon}
          />
          <StyledTreeItem
            nodeId="5"
            labelText="Junk mail"
            labelIcon={FolderOutlinedIcon}
          />
          {/* <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
        <StyledTreeItem
        nodeId="5"
        labelText="Social"
        labelIcon={SupervisorAccountIcon}
        labelInfo="90"
        color="#1a73e8"
        bgColor="#e8f0fe"
        />
        <StyledTreeItem
        nodeId="6"
        labelText="Updates"
        labelIcon={InfoIcon}
        labelInfo="2,294"
        color="#e3742f"
        bgColor="#fcefe3"
        />
        <StyledTreeItem
        nodeId="7"
        labelText="Forums"
        labelIcon={ForumIcon}
        labelInfo="3,566"
        color="#a250f5"
        bgColor="#f3e8fd"
        />
        <StyledTreeItem
        nodeId="8"
        labelText="Promotions"
        labelIcon={LocalOfferIcon}
        labelInfo="733"
        color="#3c8039"
        bgColor="#e6f4ea"
        />
      </StyledTreeItem> */}
          {/* <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} /> */}
        </TreeView>
      </Grid>
    </Box>
  );
};

export default MenuItem;
