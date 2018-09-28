import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Menu from "@material-ui/core/Menu";
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import productstore from "../data/tags.json";
import "./pop.css";

export default class Pop_over_open extends Component {
  state = {
    temp: [],
    open: false,
    style: "",
    items: [],
    bot: " ",
    neck: "",
    sleeve: "",
    pattern: "",
    material: "",
    inputstyling: "",
    topdetail: "",
    bottom: "",
    skirt_detail: "",
    skirt_length: "",
    skirt_material: "",
    skirt_pattern: "",
    skirt_type: "",
    shortsdetail: "",
    shortslength: "",
    shortsmaterial: "",
    shortspattern: "",
    pantsankle: "",
    pantsdetail: "",
    pantsfit: "",
    pantsmaterial: "",
    pantspattern: "",
    pantslength: "",
    userList: []
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Image click</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <h5>Top</h5>
            <TextField
              id="standard-name"
              select
              label="STYLE"
              className="inputstyling"
              value={this.state.style}
              onChange={e =>
                this.setState({
                  style: e.target.value
                })
              }
              margin="normal"
            >
              {productstore.Top.style.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-name"
              select
              label="NECK"
              className="inputstyling"
              value={this.state.neck}
              onChange={e =>
                this.setState({
                  neck: e.target.value
                })
              }
              margin="normal"
            >
              {productstore.Top.neck.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-name"
              select
              label="SLEEVE"
              className="inputstyling"
              value={this.state.sleeve}
              onChange={e =>
                this.setState({
                  sleeve: e.target.value
                })
              }
              margin="normal"
            >
              {productstore.Top.sleeve.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-name"
              select
              label="PATTERN"
              className="inputstyling"
              value={this.state.pattern}
              onChange={e =>
                this.setState({
                  pattern: e.target.value
                })
              }
              margin="normal"
            >
              {productstore.Top.pattern.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-name"
              select
              label="MATERIAL"
              className="inputstyling"
              value={this.state.material}
              onChange={e =>
                this.setState({
                  material: e.target.value
                })
              }
              margin="normal"
            >
              {productstore.Top.material.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-name"
              select
              label="LENGTH"
              className="inputstyling"
              value={this.state.inputstyling}
              onChange={e =>
                this.setState({
                  inputstyling: e.target.value
                })
              }
              margin="normal"
            >
              {productstore.Top.neck.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-name"
              select
              label="DETAIL"
              className="inputstyling"
              value={this.state.topdetail}
              onChange={e =>
                this.setState({
                  topdetail: e.target.value
                })
              }
              margin="normal"
            >
              {productstore.Top.detail.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <div>
            <DialogContent>
              <h6>Bottom</h6>
              <TextField
                id="standard-name"
                select
                label="TYPE"
                className="inputstyling"
                value={this.state.bottom}
                onChange={e =>
                  this.setState({
                    bottom: e.target.value
                  })
                }
                margin="normal"
              >
                {productstore.Bottom.type.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              {this.state.bottom === "Skirt" ? (
                <div>
                  <TextField
                    id="standard-name"
                    select
                    label="Length"
                    className="inputstyling"
                    value={this.state.skirt_length}
                    onChange={e =>
                      this.setState({
                        skirt_length: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Skirt.length.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Skirt_type"
                    className="inputstyling"
                    value={this.state.skirt_type}
                    onChange={e =>
                      this.setState({
                        skirt_type: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Skirt.skirt_type.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Pattern"
                    className="inputstyling"
                    value={this.state.skirt_pattern}
                    onChange={e =>
                      this.setState({
                        skirt_pattern: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Skirt.pattern.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Material"
                    className="inputstyling"
                    value={this.state.skirt_material}
                    onChange={e =>
                      this.setState({
                        skirt_material: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Skirt.material.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Detail"
                    className="inputstyling"
                    value={this.state.skirt_detail}
                    onChange={e =>
                      this.setState({
                        skirt_detail: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Skirt.detail.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              ) : this.state.bottom === "Shorts" ? (
                <div>
                  <TextField
                    id="standard-name"
                    select
                    label="Length"
                    className="inputstyling"
                    value={this.state.shortslength}
                    onChange={e =>
                      this.setState({
                        shortslength: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Shorts.length.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Detail"
                    className="inputstyling"
                    value={this.state.shortsdetail}
                    onChange={e =>
                      this.setState({
                        shortsdetail: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Shorts.detail.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Pattern"
                    className="inputstyling"
                    value={this.state.shortspattern}
                    onChange={e =>
                      this.setState({
                        shortspattern: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Shorts.pattern.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Material"
                    className="inputstyling"
                    value={this.state.shortsmaterial}
                    onChange={e =>
                      this.setState({
                        shortsmaterial: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Shorts.material.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              ) : (
                <div>
                  <TextField
                    id="standard-name"
                    select
                    label="Ankle"
                    className="inputstyling"
                    value={this.state.pantsankle}
                    onChange={e =>
                      this.setState({
                        pantsankle: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Pants.ankle.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Fit"
                    className="inputstyling"
                    value={this.state.pantsfit}
                    onChange={e =>
                      this.setState({
                        pantsfit: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Pants.fit.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Length"
                    className="inputstyling"
                    value={this.state.pantslength}
                    onChange={e =>
                      this.setState({
                        pantslength: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Pants.length.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Detail"
                    className="inputstyling"
                    value={this.state.pantsdetail}
                    onChange={e =>
                      this.setState({
                        pantsdetail: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Pants.detail.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Pattern"
                    className="inputstyling"
                    value={this.state.pantspattern}
                    onChange={e =>
                      this.setState({
                        pantspattern: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Pants.pattern.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-name"
                    select
                    label="Material"
                    className="inputstyling"
                    value={this.state.pantsmaterial}
                    onChange={e =>
                      this.setState({
                        pantsmaterial: e.target.value
                      })
                    }
                    margin="normal"
                  >
                    {productstore.Pants.material.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              )}
            </DialogContent>
          </div>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
