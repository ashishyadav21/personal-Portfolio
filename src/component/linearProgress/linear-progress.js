import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const LinearProgressWithLabel = (props) => {
   return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          {...props}
          classes={{
            root: props?.classes?.root,
            // barColorPrimary: props?.rootClass?.root,
            // colorPrimary: props?.rootClass?.primaryColor, // class name, e.g. `classes-nesting-root-x`
          }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
