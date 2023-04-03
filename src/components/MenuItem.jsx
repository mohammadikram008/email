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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { indigo } from "@mui/material/colors";
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
                fontWeight: theme.typography.fontWeightRegular
            },
            "&:hover": {
                backgroundColor: indigo
            },
            "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
                color: "var(--tree-view-color)"
            },
            [`& .${treeItemClasses.label}`]: {
                fontWeight: "inherit",
                color: "inherit"
            }
        },
        [`& .${treeItemClasses.group}`]: {
            marginLeft: 0,
            [`& .${treeItemClasses.content}`]: {
                paddingLeft: theme.spacing(2)
            }
        }
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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 0.5,
                            pr: 0
                        }}
                    >
                        <Box
                            component={LabelIcon}
                            color="inherit"
                            sx={{ p: 0.5 }}
                        />
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: "inherit", flexGrow: 1 }}
                        >
                            {labelText}
                        </Typography>
                        <Typography
                            variant="caption"
                            color="inherit"
                            sx={{ m: 1 }}
                        >
                            {labelInfo}
                        </Typography>
                    </Box>
                }
                style={{
                    "--tree-view-color": color,
                    "--tree-view-bg-color": bgColor
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
        labelText: PropTypes.string.isRequired
    };
    return (
        <Grid
            container
            lg={12}
            md={12}
            sm={12}
            xs={12}
        >
            <Box
                mt={1}
                sx={{
                    borderRadius: "4px",
                    flexGrow: 1,
                    p: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    display: "flex",
                    justifyContent: "center"
                }}
                style={{ height: "85vh", minWidth: "30%" }}
            >
                <TreeView
                    aria-label="gmail"
                    // defaultExpanded={["4"]}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    // defaultEndIcon={<div style={{ width: 5 }} />}
                    sx={{ flexGrow: 1, maxWidth: 220 }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minWidth: "100%"
                        }}
                    >
                        <AddOutlinedIcon /> New Mail
                    </Button>
                    <Grid
                        container
                        spacing={3}
                        lg={12}
                        mt={2}
                        md={12}
                        sm={12}
                        xs={12}
                    >
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
                    </Grid>
                </TreeView>
            </Box>
        </Grid>
    );
};

export default MenuItem;
