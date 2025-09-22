import Header from "../../../Header";
import React, { useState, useRef, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import "../../../../App.css";
import DeleteIcon from "@mui/icons-material/Delete";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DatePicker from "react-datepicker";
import Autocomplete from "@mui/material/Autocomplete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { FaPlusCircle, FaShippingFast, FaWalking } from "react-icons/fa";
import {
  Box,
  CircularProgress,
  Input,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { BsLightbulbFill } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, ListItemText, TextField } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { GoInfo } from "react-icons/go";
import { toast, ToastContainer } from "react-toastify";
import { Prompt } from "react-router-dom/cjs/react-router-dom";
import { VscDebugStepBack } from "react-icons/vsc";
import { FaCaretUp, FaCropSimple, FaStore } from "react-icons/fa6";
import { Modal } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import SaveIcon from "@mui/icons-material/Save";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IoCaretDown } from "react-icons/io5";
import Checkbox from "@mui/material/Checkbox";
import { FaCloudMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import TipsModal from "../../../../componets/Tips/TipsModal";

const Addsale = () => {
  const token = localStorage.getItem("token");
  const searchInputRef = useRef(null);
  const itemNameInputRef = useRef(null);
  const barcodeInputRef = useRef(null);
  const unitInputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const inputRef8 = useRef(null);
  const inputRef9 = useRef(null);
  const inputRef10 = useRef(null);
  const [item, setItem] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [saleItemId, setSaleItemId] = useState(null);
  const [itemId, setItemId] = useState(null);
  const history = useHistory();
  const paymentOptions = [
    { id: 1, label: "Cash" },
    { id: 2, label: "UPI" },
  ];
  const pickupOptions = [
    { id: 1, label: "Counter", icon: <FaStore /> },
    { id: 2, label: "Pickup", icon: <FaWalking /> },
    { id: 3, label: "Delivery", icon: <FaShippingFast /> },
  ];
  const [todayLoyltyPoint, setTodayLoyaltyPoint] = useState(0);
  const userId = localStorage.getItem("userId");
  const [customer, setCustomer] = useState("");
  const [paymentType, setPaymentType] = useState("cash");
  const [pickup, setPickup] = useState("Counter");
  const [id, setId] = useState("");
  const [error, setError] = useState({ customer: "" });
  const [expiryDate, setExpiryDate] = useState("");
  const [selectedEditItemId, setSelectedEditItemId] = useState("");
  const [mrp, setMRP] = useState("");
  const [base, setBase] = useState("");
  const [barcode, setBarcode] = useState("");
  const [batchListData, setBatchListData] = useState([]);
  const [isAlternative, setIsAlternative] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [ItemSaleList, setItemSaleList] = useState({ sales_item: [] });
  const [totalAmount, setTotalAmount] = useState(0);
  const [qty, setQty] = useState("");
  const [maxQty, setMaxQty] = useState("");
  const [tempQty, setTempQty] = useState("");

  const [uniqueItems, setUniqueItems] = useState([])

  const [order, setOrder] = useState("");
  const [roundOff, setRoundOff] = useState(0);
  const [itemEditID, setItemEditID] = useState(0);
  const [gst, setGst] = useState("");
  const [batch, setBatch] = useState("");
  const [unit, setUnit] = useState("");
  const [finalDiscount, setFinalDiscount] = useState(0);
  const [openAddPopUp, setOpenAddPopUp] = useState(false);
  const [openPurchaseHistoryPopUp, setOpenPurchaseHistoryPopUp] =
    useState(false);
  const [highlightedRowId, setHighlightedRowId] = useState(null);
  const [openCustomer, setOpenCustomer] = useState(false);
  const [doctor, setDoctor] = useState(null);
  const [clinic, setClinic] = useState();
  const [netAmount, setNetAmount] = useState(0);
  const [loc, setLoc] = useState("");
  const [itemAmount, setItemAmount] = useState(null);
  let defaultDate = new Date();
  const [IsDelete, setIsDelete] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [openAddItemPopUp, setOpenAddItemPopUp] = useState(false);
  const [openReminderPopUp, setOpenReminderPopUp] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [customerDetails, setCustomerDetails] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const [value, setValue] = useState("");
  const [address, setAddress] = useState("");
  defaultDate.setDate(defaultDate.getDate() + 3);
  const [selectedEditItem, setSelectedEditItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [totalgst, setTotalgst] = useState(0);
  const [totalBase, setTotalBase] = useState(0);
  const [marginNetProfit, setMarginNetProfit] = useState(0);
  const [totalMargin, setTotalMargin] = useState(0);
  const [totalNetRate, setTotalNetRate] = useState(0);
  const [dueAmount, setDueAmount] = useState(null);
  const [givenAmt, setGivenAmt] = useState(null);
  const [otherAmt, setOtherAmt] = useState(0);
  const [searchItemID, setSearchItemID] = useState("");
  const [bankData, setBankData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [discountAmount, setDiscountAmount] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [unsavedItems, setUnsavedItems] = useState(false);
  const [nextPath, setNextPath] = useState("");
  const [ptr, setPtr] = useState();
  const [discount, setDiscount] = useState();
  const [barcodeItemName, setBarcodeItemName] = useState("");
  const [previousLoyaltyPoints, setPreviousLoyaltyPoints] = useState(0);
  const [loyaltyVal, setLoyaltyVal] = useState(0);
  const [maxLoyaltyPoints, setMaxLoyaltyPoints] = useState(0);
  const [addItemName, setAddItemName] = useState("");
  const [addBarcode, setAddBarcode] = useState("");
  const [addUnit, setAddUnit] = useState("");
  const [barcodeBatch, setBarcodeBatch] = useState("");
  const [billNo, setBillNo] = useState(localStorage.getItem("BillNo"));
  const tableRef = useRef(null); // Reference for table container

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitTimeout, setSubmitTimeout] = useState(null);

  const [billSaveDraft, setBillSaveDraft] = useState("0");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  /*<============================================================================ Input ref on keydown enter ===================================================================> */

  const [selectedIndex, setSelectedIndex] = useState(-1); // Index of selected row
  const tableRef1 = useRef(null); // Reference for table container
  const [isAutocompleteDisabled, setAutocompleteDisabled] = useState(true);

  const inputRefs = useRef([]);
  const dateRefs = useRef([]);

  const submitButtonRef = useRef(null);
  const addButtonref = useRef(null);

  const timeoutRef = useRef(null);

  // Add controlled open state for Autocomplete
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);

  const [autocompleteKey, setAutocompleteKey] = useState(0);
  const [pillTimes, setPillTimes] = useState({}); // { [item.id]: { morning, noon, night, refillDays, refillDate } }
  const [checkedItems, setCheckedItems] = useState({});
  const [showModal, setShowModal] = useState(false);

  /*<============================================================ Pil remider  ===================================================> */

  useEffect(() => {
    if (!ItemSaleList?.sales_item?.length) return;

    const updated = {};
    ItemSaleList.sales_item.forEach((item) => {
      const totalDose = 1 + 0 + 1;
      const refillDays = totalDose > 0 ? Math.floor(item.qty / totalDose) : 0;
      const refillDate = new Date();
      refillDate.setDate(refillDate.getDate() + refillDays);

      updated[item.id] = {
        morning: 1,
        noon: 0,
        night: 1,
        refillDays,
        refillDate,
      };
    });

    setPillTimes(updated);
  }, [ItemSaleList]);


  /*<============================================================ disable autocomplete to focus when tableref is focused  ===================================================> */
  // Handle table focus and blur to enable/disable autocomplete
  useEffect(() => {
    const handleTableFocus = () => setAutocompleteDisabled(false);
    const handleTableBlur = () => setAutocompleteDisabled(true);

    const tableElement = tableRef1.current;
    if (tableElement) {
      tableElement.addEventListener("focus", handleTableFocus);
      tableElement.addEventListener("blur", handleTableBlur);
    }

    return () => {
      if (tableElement) {
        tableElement.removeEventListener("focus", handleTableFocus);
        tableElement.removeEventListener("blur", handleTableBlur);
      }
    };
  }, []);

  // Handle keyboard navigation (ArrowUp, ArrowDown, Enter)
  useEffect(() => {
    const handleKeyPress = (e) => {
      // If autocomplete dropdown is visible and no item is selected, handle arrow keys
      // Only trigger table focus if there's no search value and no selected option
      if (isVisible && !selectedOption && !searchItem && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
        e.preventDefault();
        // Focus on tableRef1 after a short delay to ensure state updates
        setTimeout(() => {
          if (tableRef1.current) {
            tableRef1.current.focus();
          }
        }, 100);
        return;
      }

      // Only handle table navigation when table is focused and no autocomplete is visible
      if (!ItemSaleList?.sales_item?.length || isVisible) return;

      const isInputFocused = document.activeElement.tagName === "INPUT";
      const isTableFocused = document.activeElement === tableRef1.current;

      if (isInputFocused && !isTableFocused) return;

      e.preventDefault(); // Prevent default scrolling behavior

      setSelectedIndex((prevIndex) => {
        if (prevIndex === -1) {
          // If no row is selected, start selection
          return e.key === "ArrowDown" ? 0 : ItemSaleList.sales_item.length - 1;
        }

        if (e.key === "ArrowDown") {
          return Math.min(prevIndex + 1, ItemSaleList.sales_item.length - 1);
        } else if (e.key === "ArrowUp") {
          return Math.max(prevIndex - 1, 0);
        }

        return prevIndex;
      });

      if (e.key === "Enter" && selectedIndex !== -1) {
        const selectedRow = ItemSaleList.sales_item[selectedIndex];
        if (selectedRow) handleEditClick(selectedRow);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [ItemSaleList.sales_item, selectedIndex, isVisible, selectedOption, searchItem]);
  /*<================================================================================== handle shortcut  =========================================================================> */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!event.altKey || event.repeat) return;

      const key = event.key.toLowerCase();
      event.preventDefault(); // Prevent default browser behavior
      if (isSubmitting) return;

      switch (key) {
        case "s":
          setIsSubmitting(true);
          setBillSaveDraft("1");
          handleSubmit("1");
          break;

        case "g":
          setBillSaveDraft("0");
          handleSubmit("0");
          break;
        case "p":
          setBillSaveDraft("2");
          handleSubmit("1");
          break;

        case "m":
          setSearchItem("");
          setValue("");
          setItem("");
          setItemId(null);
          resetValue();
          setExpiryDate("");
          setMRP("");
          setBase("");
          setGst("");
          setQty("");
          setLoc("");
          setUnit("");
          setBatch("");
          setIsVisible(false); // Close dropdown when no item is selected
          tableRef1.current?.blur(); // <-- explicitly blur it
          setSelectedEditItem(null);
          setIsEditMode(false);
          setSelectedEditItemId("");
          setItemEditID(0);
          resetValue();
          searchInputRef.current?.focus();

          if (isVisible && value && !batch) {
            tableRef.current.focus();
            if (!item) return; // Ensure the item is valid.
          }
          setSelectedOption(null);
          if (searchInputRef.current) {
            searchInputRef.current.focus();
            setSelectedIndex(-1); // Clear any selection
          }
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [billNo, ItemSaleList, isSubmitting]);
  // Dependencies only affect Alt+S

  //   const handleKeyDown = (event, index) => {

  //     if (event.key === "Enter") {
  //       event.preventDefault(); // Prevent form submission

  //       const nextInput = inputRefs.current[index + 1];
  //       if (nextInput) {
  //         nextInput.focus(); // Move to next input
  //       }
  //     }
  //   };

  const isDateDisabled = (date) => {
    const today = new Date();
    // Set time to 00:00:00 to compare only date part--------------------------
    today.setHours(0, 0, 0, 0);
    // Disable dates that are greater than today-------------------------------------
    return date > today;
  };

  const LastPurchaseListcolumns = [
    {
      id: "supplier_name",
      label: "Distributor Name",
      minWidth: 170,
      height: 100,
    },
    { id: "qty", label: "QTY", minWidth: 100 },
    { id: "fr_qty", label: "Free", minWidth: 100 },
    { id: "scheme_account", label: "Sch. Amt", minWidth: 100 },
    { id: "ptr", label: "PTR", minWidth: 100 },
    { id: "mrp", label: "MRP", minWidth: 100 },
    { id: "bill_date", label: "Date", minWidth: 100 },
    { id: "bill_no", label: "Bill No", minWidth: 100 },
  ];

  const handleExpiryDateChange = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, "");

    if (inputValue.length > 2) {
      const month = inputValue.slice(0, 2);
      const year = inputValue.slice(2, 4);
      if (parseInt(month) > 12) {
        inputValue = "MM";
      } else if (parseInt(month) < 1) {
        inputValue = "01";
      }
      inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}`;
    }

    setExpiryDate(inputValue);
  };
  const handleOpenDialog = (id) => {
    setOpenPurchaseHistoryPopUp(true);
    lastPurchseHistory();
    setSearchItemID(id);
  };

  useEffect(() => {
    const discount = (totalAmount * finalDiscount) / 100;
    setDiscountAmount(discount.toFixed(2));

    if (otherAmt < 0 && Math.abs(otherAmt) > totalAmount) {
      setOtherAmt("");
    } else {
      // let calculatedNetAmount = totalAmount - discount + Number(otherAmt);
      // if (calculatedNetAmount < 0) {
      //     setOtherAmt(-(totalAmount - discount));
      //     calculatedNetAmount = 0;
      // }

      let loyaltyPointsDeduction = loyaltyVal;
      let calculatedNetAmount =
        totalAmount - discount - loyaltyPointsDeduction + Number(otherAmt);

      if (calculatedNetAmount < 0) {
        setOtherAmt(-(totalAmount - discount - loyaltyPointsDeduction));
        calculatedNetAmount = 0;
      }

      const decimalPart = Number((calculatedNetAmount % 1).toFixed(2));
      const roundedDecimal = decimalPart;
      if (decimalPart < 0.5) {
        setRoundOff((-roundedDecimal).toFixed(2));
        setNetAmount(Math.floor(calculatedNetAmount));
      } else {
        setRoundOff((1 - roundedDecimal).toFixed(2));
        setNetAmount(Math.ceil(calculatedNetAmount));
      }

      const due = givenAmt - calculatedNetAmount;
      setDueAmount(due.toFixed(2));
    }
  }, [
    totalAmount,
    loyaltyVal,
    finalDiscount,
    otherAmt,
    givenAmt,
    barcodeBatch,
  ]);

  const handleOtherAmtChange = (e) => {
    const value = e.target.value;
    const numericValue = isNaN(value) || value === "" ? "" : Number(value);

    if (numericValue >= 0) {
      setOtherAmt(numericValue);
    } else {
      const negativeLimit = -totalAmount;
      if (numericValue < negativeLimit) {
        setOtherAmt(negativeLimit);
      } else {
        setOtherAmt(numericValue);
      }
    }
  };

  useEffect(() => {
    // ListOfDoctor();
    BankList();
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const customerAllData = async () => {
        let data = new FormData();
        const name = searchQuery.split(" [")[0];
        data.append("search", name);
        setIsLoading(true);
        try {
          const response = await axios.post("list-customer", data, {
            // params: params,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // console.log('response.data.data :>> ', response.data.data);
          setCustomerDetails(response.data.data);
          if (response.data.status === 401) {
            history.push("/");
            localStorage.clear();
          }
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.error("API error:", error);
        }
      };

      const delayDebounceFn = setTimeout(() => {
        customerAllData();
      }, 500); // Debounce to prevent too many API calls

      return () => clearTimeout(delayDebounceFn);
    } else {
      setCustomerDetails([]);
    }
  }, [searchQuery, token]);

  useEffect(() => {
    const fetchDoctors = async () => {
      let data = new FormData();
      const params = { search: searchDoctor || "" };
      setIsLoading(true);
      try {
        const res = await axios.post("doctor-list?", data, {
          params,
          headers: { Authorization: `Bearer ${token}` }
        });
        setDoctorData(res.data.data || []);

        // Set default doctor only on initial load
        if (!doctor && res.data.data?.length) {
          const defaultDoc = res.data.data.find(d => d.default_doctor === "1") || res.data.data[0];
          setDoctor(defaultDoc);
        }
      } catch (err) {
        // handle error
      } finally {
        setIsLoading(false);
      }
    };
    const timeout = setTimeout(fetchDoctors, 500);
    return () => clearTimeout(timeout);

  }, [token]);


  useEffect(() => {
    let doctor = doctorData.filter((d) => d.default_doctor === "1");

    setDoctor(doctor[0]);

  }, [doctorData])

  useEffect(() => {
    if (itemId) {
      batchList(itemId);
    }
    const totalAmount = qty / unit;
    const total = parseFloat(base) * totalAmount;
    if (total) {
      setItemAmount(total.toFixed(2));
    } else {
      setItemAmount(0);
    }
  }, [itemId, base, qty]);

  /*<========================================================================= update state   ====================================================================> */

  useEffect(() => {
    if (selectedEditItem) {
      setUnit(selectedEditItem.unit);
      setBatch(selectedEditItem.batch);
      setExpiryDate(selectedEditItem.exp);
      setMRP(selectedEditItem.mrp);
      setQty(selectedEditItem.qty);
      setBase(selectedEditItem.base);
      setGst(selectedEditItem.gst_name);
      setOrder(selectedEditItem.order);
      setItemAmount(selectedEditItem.net_rate);

      inputRef5.current.focus();
    }
  }, [selectedEditItem]);

  // CORRECTED (NEW) — add once among your effects to clear the timeout on unmount
  useEffect(() => {
    return () => {
      if (submitTimeout) clearTimeout(submitTimeout);
    };
  }, [submitTimeout]);

  /*<========================================================================= search add item   ====================================================================> */

  const handleSearch = async (searchItem) => {
    let data = new FormData();
    data.append("search", searchItem);
    try {
      const res = await axios.post("item-search", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const items = res.data.data.data;
      setItemList(items);

      const allOutOfStock = items.every((item) => item.stock === 0);

      // if (allOutOfStock) {
      //   // console.log('Search Item-------');
      //   fetchItemDrugGroup(searchItem);
      // }

      return items;
    } catch (error) {
      console.error("API error:", error);
    }
  };

  const handelAddItemOpen = () => {
    setUnsavedItems(true);
    setOpenAddItemPopUp(true);

    setTimeout(() => {
      if (itemNameInputRef.current) {
        itemNameInputRef.current.focus();
      }
    }, 0);
  };

  const handleInputChange = (event, newInputValue) => {
    setUnsavedItems(true);
    setSearchItem(newInputValue);
    handleSearch(newInputValue);
  };


  const handleOptionChange = (event, newValue) => {
    setUnsavedItems(true);

    setSelectedOption(newValue);
    setValue(newValue);
    const itemName = newValue ? newValue.iteam_name : "";

    setSearchItem(itemName);
    setItemId(newValue?.id);
    setIsVisible(true);
    handleSearch(itemName);
    if (!itemName) {
      setExpiryDate("");
      setMRP("");
      setBase("");
      setGst("");
      setQty("");
      setLoc("");
      setUnit("");
      setBatch("");
      setIsVisible(false); // Close dropdown when no item is selected
    }
    tableRef1.current?.blur(); // <-- explicitly blur it

    // setSelectedIndex(0)
    setSelectedEditItem(null);
    setIsEditMode(false);
    setSelectedEditItemId("");
    setItemEditID(0);
    resetValue();
    searchInputRef.current?.focus();

    if (isVisible && value && !batch) {
      tableRef.current.focus();
      if (!item) return; // Ensure the item is valid.
    }
  };

  const handlePassData = (event) => {

    setItemId(event.item_id);
    setSelectedOption(event);
    setSelectedEditItemId(event.id);
    setSearchItem(event.iteam_name);
    setBatch(event.batch_number);
    setItem(event.iteam_name);
    setUnit(event.unit);
    setExpiryDate(event.expiry_date);
    setMRP(event.mrp);
    setMaxQty(event.stock);
    setBase(event.mrp);
    setGst(event.gst_name);
    // setQty(event.qty);
    setLoc(event.location);
    setTempQty(event.qty);

    if (inputRef5.current) {
      inputRef5.current.focus();
    }
    setAutoCompleteOpen(false); // Close Autocomplete dropdown when batch row is selected

    setUniqueItems((uniqueItems) => {
      // avoid duplicates by id
      const exists = uniqueItems.some((item) => item.id === event.id);
      if (exists) return uniqueItems;

      return [...uniqueItems, { id: event.id, stock: event.stock }];
    });


  };
  /*<========================================================================= add new item   ====================================================================> */

  const handleAddNewItemValidation = () => {
    const newErrors = {};
    if (!addItemName) {
      newErrors.addItemName = "Item Name is required";
      toast.error(newErrors.addItemName);
    } else if (!addUnit) {
      newErrors.addUnit = "Unit is required";
      toast.error(newErrors.addUnit);
    } else if (!addBarcode) {
      newErrors.addBarcode = "Barcode is required";
      toast.error(newErrors.addBarcode);
    }
    const isValid = Object.keys(newErrors).length === 0;
    if (isValid) {
      handleAddNewItem();
    }

    return isValid;
  };

  const handleAddNewItem = async () => {
    let formData = new FormData();
    formData.append("item_name", addItemName ? addItemName : "");
    formData.append("unite", addUnit ? addUnit : "");
    formData.append("weightage", addUnit ? addUnit : "");
    formData.append("pack", addUnit ? "1" + addUnit : "");
    formData.append("barcode", addBarcode ? addBarcode : "");

    formData.append("packaging_id", "");
    formData.append("drug_group", "");
    formData.append("gst", "");
    formData.append("location", "");
    formData.append("mrp", "");
    formData.append("minimum", "");
    formData.append("maximum", "");
    formData.append("discount", "");
    formData.append("margin", "");
    formData.append("hsn_code", "");
    formData.append("message", "");
    formData.append("item_category_id", "");
    formData.append("pahrma", "");
    formData.append("distributer", "");
    formData.append("front_photo", "");
    formData.append("back_photo", "");
    formData.append("mrp_photo", "");

    try {
      const response = await axios.post("create-iteams", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === 200) {
        //console.log("response===>", response.data);
        toast.success(response.data.message);
        setOpenAddItemPopUp(false);
      } else if (response.data.status === 400) {
        toast.error(response.data.message);
      } else if (response.data.status === 401) {
        history.push("/");
        localStorage.clear();
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Please try again later");
      }
    }
  };


  /*<========================================================================= Find drug group   ====================================================================> */

  const fetchItemDrugGroup = async (searchItem) => {
    let data = new FormData();
    data.append("search", searchItem);
    try {
      const res = await axios.post("iteam-drug-group", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data) {
        // console.log('Item Drug Group Data:', res.data.data.data);
        if (res.data.data) {
          const filteredItems = res.data.data.data.filter(
            (item) => item.stock > 0
          );
          setItemList(filteredItems);
          // console.log('Filtered itemList:', filteredItems);
        }
      }
    } catch (error) {
      console.error("Error fetching item-drug-group:", error);
    }
  };

  const resetAddDialog = () => {
    setOpenAddPopUp(false);
    setOpenAddItemPopUp(false);
    setAddItemName("");
    setAddUnit("");
    setAddBarcode("");
  };

  /*<========================================================================= fetch customer data   ====================================================================> */

  const customerAllData = async (searchQuery) => {
    let data = new FormData();
    data.append("search", searchQuery);
    setIsLoading(true);
    try {
      const response = await axios.post("list-customer", data, {
        // params: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const customers = response.data.data || [];
      setCustomerDetails(customers);

      // Set the first customer as default if available
      if (customers.length > 0) {
        const firstCustomer = customers[0];
        setCustomer(firstCustomer);
        setPreviousLoyaltyPoints(firstCustomer.roylti_point || 0);
        setMaxLoyaltyPoints(firstCustomer.roylti_point || 0);
      }

      if (response.data.status === 401) {
        history.push("/");
        localStorage.clear();
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("API error:", error);
    }
  };

  useEffect(() => {
    customerAllData();
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Focus on the search item name field
    }
    generateRandomNumber();
    let data = new FormData();
    data.append("random_number", localStorage.getItem("RandomNumber") || "");
    axios.post("all-sales-item-delete", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }, []);

  /*<========================================================================= fetch bank data   ====================================================================> */

  const BankList = async () => {
    let data = new FormData();
    try {
      await axios
        .post("bank-list", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setBankData(response.data.data);
          if (response.data.status === 401) {
            history.push("/");
            localStorage.clear();
          }
        });
    } catch (error) {
      console.error("API error:", error);
    }
  };


  const handleCustomerOption = (event, newValue) => {
    setCustomer(newValue);
    setUnsavedItems(true);

    if (newValue) {
      const points = newValue.roylti_point || 0;
      setPreviousLoyaltyPoints(points);

      setMaxLoyaltyPoints(points);
    } else {
      setPreviousLoyaltyPoints(0);
      setMaxLoyaltyPoints(0);
      setLoyaltyVal(0);
    }
  };





  // Define the order of refs for the item entry row (from first td to last td)
  const itemRowInputOrder = [
    inputRef1, // Unit
    inputRef3, // Batch
    inputRef4, // Expiry
    inputRef5, // MRP
    inputRef6, // Base
    inputRef7, // GST
    inputRef9, // Qty
    inputRef8, // Loc
    inputRef10 // Order
  ];



  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault();
      for (let i = index + 1; i < itemRowInputOrder.length; i++) {
        const nextRef = itemRowInputOrder[i];
        if (nextRef && nextRef.current && !nextRef.current.disabled) {
          nextRef.current.focus();
          return;
        }
      }
      // Optionally, focus a save/add button or do nothing if at the end
    }
  };
  /*<========================================================================= add doctor   ====================================================================> */

  const AddDoctorRecord = async () => {
    if (!doctorName || !clinic) {
      toast.error("Please fill all required fields");
      return; // stop further execution if validation fails
    }

    let data = new FormData();
    data.append("name", doctorName);
    data.append("clinic", clinic);

    try {
      await axios
        .post("doctor-create", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setOpenAddPopUp(false);
          setDoctorName("");
          setClinic("");
          toast.success(response.data.message);
        });
    } catch (error) {
      setIsLoading(false);
      if (error.response?.data?.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  /*<========================================================================= add customer   ====================================================================> */

  const AddCustomerRecord = async () => {
    if (!customerName.trim() || !mobileNo.trim()) {
      toast.error("Please fill all the fields");
      return; // Prevent further execution if validation fails
    }

    let data = new FormData();
    data.append("name", customerName.trim());
    data.append("mobile_no", mobileNo.trim());

    try {
      const response = await axios.post("create-customer", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOpenCustomer(false);
      setCustomerName("");
      setMobileNo("");
      toast.success(response.data.message);
    } catch (error) {
      setIsLoading(false);
      if (error.response?.data?.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  /*<========================================================================= purchase history   ====================================================================> */

  const lastPurchseHistory = async () => {
    let data = new FormData();
    const params = {
      item_id: itemId ? itemId : "",
    };
    setIsLoading(true);
    try {
      await axios
        .post("online-order-item?", data, {
          params: params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPurchaseHistory(response.data.data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error("API error:", error);
    }
  };
  /*<================================================================== state update immediatly  =============================================================> */

  useEffect(() => {
    if (selectedEditItem) {
      setSelectedEditItemId(selectedEditItem.id);
      setBarcodeItemName(selectedEditItem.iteam_name);
      setSearchItem(selectedEditItem.iteam_name);
      setItemEditID(selectedEditItem.item_id);
      setLoc(selectedEditItem.location);
    }
    setSelectedOption(selectedEditItem);

  }, [selectedEditItem]);

  /*<========================================================================= handle edit item  ====================================================================> */

  const handleEditClick = (item) => {
    if (!item) return;
    setSelectedEditItem(item);
    setIsEditMode(true);
    setSelectedEditItemId();
    setSelectedOption(item);

    const found = uniqueItems.find(u => u.id === item.id);

    if (found) {
      setMaxQty(found.stock); // use stock from uniqueItems
    } else {
      setMaxQty(item.stock); // fallback to item stock
    }

  };
  /*<========================================================================= get added item  ====================================================================> */

  const saleItemList = async () => {
    let data = new FormData();
    data.append("random_number", localStorage.getItem("RandomNumber") || "");
    // const params = {
    //     random_number: localStorage.getItem('RandomNumber') || ''
    // };
    try {
      const res = await axios
        .post("sales-item-list?", data, {
          // params: params,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log('response-------- :>> ', response.data.data.sales_item);
          setItemSaleList(response.data.data);
          setTodayLoyaltyPoint(response.data.data.today_loylti_point);
          setTotalAmount(response.data.data.sales_amount);
          setTotalBase(response.data.data.total_base);
          setTotalgst(response.data.data.total_gst);
          setMarginNetProfit(response.data.data.margin_net_profit);
          setTotalMargin(response.data.data.total_margin);
          setTotalNetRate(response.data.data.total_net_rate);

          if (response.data.status == 401) {
            history.push("/");
            localStorage.clear();
          }
        });
    } catch (error) {
      console.error("API error:", error);
    }
  };
  /*<========================================================================= handle barcode  ====================================================================> */

  const handleBarcode = async () => {
    if (!barcode) {
      return;
    }
    try {
      const res = axios
        .post(
          "barcode-batch-list?",
          { barcode: barcode },
          {
            // params: params,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setTimeout(() => {
            handleBarcodeItem();
            // handleAddItem()
          }, 100);

          const handleBarcodeItem = async () => {
            setUnsavedItems(true);
            let data = new FormData();

            data.append("random_number", localStorage.getItem("RandomNumber"));
            // data.append("iteam_name", response?.data?.data[0]?.iteam_name);

            data.append(
              "unit",
              Number(response?.data?.data[0]?.batch_list[0]?.unit)
            );
            data.append(
              "batch",
              response?.data?.data[0]?.batch_list[0]?.batch_name
                ? response?.data?.data[0]?.batch_list[0]?.batch_name
                : 0
            );
            data.append(
              "exp",
              response?.data?.data[0]?.batch_list[0]?.expiry_date
            );

            data.append(
              "mrp",
              Number(response?.data?.data[0]?.batch_list[0]?.mrp)
                ? Number(response?.data?.data[0]?.batch_list[0]?.mrp)
                : 0
            );
            data.append(
              "qty",
              Number(response?.data?.data[0]?.batch_list[0]?.qty)
                ? Number(response?.data?.data[0]?.batch_list[0]?.qty)
                : 0
            );
            data.append(
              "free_qty",
              Number(response?.data?.data[0]?.batch_list[0]?.maxQty)
                ? Number(response?.data?.data[0]?.batch_list[0]?.maxQty)
                : 0
            );
            data.append(
              "ptr",
              Number(response?.data?.data[0]?.batch_list[0]?.ptr)
                ? Number(response?.data?.data[0]?.batch_list[0]?.ptr)
                : 0
            );
            data.append(
              "discount",
              Number(response?.data?.data[0]?.batch_list[0]?.discount)
                ? Number(response?.data?.data[0]?.batch_list[0]?.discount)
                : 0
            );
            data.append(
              "base",
              Number(response?.data?.data[0]?.batch_list[0]?.base)
                ? Number(response?.data?.data[0]?.batch_list[0]?.base)
                : 0
            );
            data.append(
              "gst",
              Number(response?.data?.data[0]?.batch_list[0]?.gst_name)
                ? Number(response?.data?.data[0]?.batch_list[0]?.gst_name)
                : 0
            );
            data.append(
              "location",
              response?.data?.data[0]?.batch_list[0]?.location
                ? response?.data?.data[0]?.batch_list[0]?.location
                : 0
            );
            data.append(
              "margin",
              Number(response?.data?.data[0]?.batch_list[0]?.margin)
                ? Number(response?.data?.data[0]?.batch_list[0]?.margin)
                : 0
            );
            data.append(
              "net_rate",
              Number(response?.data?.data[0]?.batch_list[0]?.net_rate)
                ? Number(response?.data?.data[0]?.batch_list[0]?.net_rate)
                : 0
            );
            data.append(
              "item_id",
              Number(response?.data?.data[0]?.batch_list[0]?.item_id)
                ? Number(response?.data?.data[0]?.batch_list[0]?.item_id)
                : 0
            );

            data.append(
              "id",
              Number(response?.data?.data[0]?.batch_list[0]?.item_id)
                ? Number(response?.data?.data[0]?.batch_list[0]?.item_id)
                : 0
            );
            data.append("user_id", userId);
            data.append("unit_id", Number(0));

            try {
              const response = axios.post("sales-item-add", data, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              setTotalAmount(0);
              saleItemList();
              setUnit("");
              setBatch("");
              setExpiryDate("");
              setMRP("");
              setQty("");
              setBase("");
              setGst("");
              setBatch("");
              setBarcode("");
              setLoc("");
              setOrder("");

              setIsEditMode(false);
              setSelectedEditItemId(null);
              setBarcode("");
              setValue("");
              setSearchItem("");
              if (response.data.status === 401) {
                history.push("/");
                localStorage.clear();
              }
            } catch (error) { }
          };
        });
    } catch (error) {
      console.error("API error:", error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleBarcode();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [barcode]);

  /*<========================================================================= save sale bill  ====================================================================> */

  const handleSubmit = (draft) => {


    if (isSubmitting) {
      toast.warning("Please wait, request in progress...");
      return;
    }
    setIsSubmitting(true); // Lock

    setUnsavedItems(false);
    const newErrors = {};
    if (!customer) {
      newErrors.customer = "Please select Customer";
    }
    if (totalAmount < 1) {
      newErrors.totalAmount = "Total Amount must be greater than 0";
      toast.error("Total Amount must be greater than 0");
    }
    if (loyaltyVal > totalAmount) {
      newErrors.totalAmount =
        "Total Amount must be greater than Loyalty points";
      toast.error("Total Amount must be greater than Loyalty points");
    } else if (ItemSaleList?.sales_item.length == 0) {
      newErrors.item = "Please Add any Item in Sale Bill";
      toast.error("Please Add any Item in Sale Bill");
    }
    setError(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);

      return;

    }
    submitSaleData(draft);
  };

  const submitSaleData = async (draft) => {
    if (isSubmitting) {
      toast.warning("Please wait, request in progress...");
      return;
    }

    let data = new FormData();
    // data.append("bill_no", localStorage.getItem('BillNo') ? localStorage.getItem('BillNo') : '');
    const calculatedPreviousLoyaltyPoint =
      Math.max(0, previousLoyaltyPoints - loyaltyVal) || 0;

    data.append("bill_no", billNo);
    data.append("customer_id", customer?.id ? customer?.id : "");
    data.append("status", "Completed");
    data.append(
      "bill_date",
      selectedDate ? new Date(selectedDate).toISOString().split("T")[0] : ""
    );

    data.append("customer_address", address || "");
    data.append("doctor_id", doctor?.id ? doctor?.id : "");
    data.append("igst", ItemSaleList?.igst || "");
    data.append(
      "cgst",
      (ItemSaleList?.cgst).toFixed(2) ? (ItemSaleList?.cgst).toFixed(2) : ""
    );
    data.append(
      "sgst",
      (ItemSaleList?.sgst).toFixed(2) ? (ItemSaleList?.sgst).toFixed(2) : ""
    );
    data.append("given_amount", givenAmt || 0); //no
    data.append("due_amount", dueAmount || 0); //no
    data.append("total_base", totalBase || 0);
    data.append("round_off", roundOff || 0);
    data.append("pickup", pickup ? pickup : "");
    data.append("owner_name", "0");
    data.append("payment_name", paymentType ? paymentType : "");
    data.append(
      "product_list",
      JSON.stringify(ItemSaleList.sales_item)
        ? JSON.stringify(ItemSaleList.sales_item)
        : ""
    );
    data.append("net_amount", netAmount.toFixed(2) || 0);
    data.append("other_amount", otherAmt || 0);
    data.append("total_discount", finalDiscount || "");
    data.append("discount_amount", discountAmount ? discountAmount : "");
    data.append("total_amount", totalAmount || 0);
    data.append("other_amount", otherAmt || 0);
    data.append("margin_net_profit", marginNetProfit || 0);
    data.append("margin", totalMargin || 0);
    data.append("net_rate", totalNetRate || 0);
    data.append("mrp", mrp ? mrp : "");
    data.append("ptr", ptr ? ptr : "");
    data.append("discount", discount ? discount : "");
    data.append("total_gst", totalgst || "");
    data.append("roylti_point", loyaltyVal || 0);
    data.append("previous_loylti_point", calculatedPreviousLoyaltyPoint || 0);
    data.append("today_loylti_point", todayLoyltyPoint || 0);
    data.append("draft_save", !draft ? "1" : draft);

    try {
      const response = await axios.post("create-sales", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.status === 200) {
        setBillNo(billNo + 1);
        toast.success(response.data.message);
        localStorage.removeItem("RandomNumber");

        const lowStockItems = ItemSaleList.sales_item.filter(
          (item) => parseFloat(item.total_stock) <= 1
        );

        if (lowStockItems.length > 0) {
          // console.log('Low stock items:', lowStockItems);
        }

        if (billSaveDraft == 1 && customer.id !== 1) {
          handleSendInvoice(customer, totalAmount, selectedDate, billNo);

        }

        if (billSaveDraft == 2) {
          const saleId = response?.data?.data?.id;
          setSelectedEditItemId(null);
          setSearchItem("");
          setValue("");
          setItem("");
          setItemId(null);
          resetValue();
          setSelectedOption(null);
          setSelectedEditItem(null);
          if (searchInputRef.current) {
            searchInputRef.current.focus();
            setSelectedIndex(-1);
          }
          pdfGenerator(saleId);
        }

        // Add cooldown period
        const timeout = setTimeout(() => {
          setIsSubmitting(false);
          history.push("/salelist");
        }, 2000);

        setSubmitTimeout(timeout);

      } else if (response.data.status === 400) {
        setIsSubmitting(false); // unlock on known API error
        toast.error(response.data.message);
      }


    } catch (error) {
      // Reset after error with shorter cooldown
      const timeout = setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
      setSubmitTimeout(timeout);

      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Please try again later");
      }
    }
  };


  /*<========================================================================= handle leave page  ====================================================================> */
  const handleNavigation = (path) => {
    setOpenModal(true);
    // setOpenCustomer(false);
    // setOpenAddPopUp(false);
    setNextPath(path);
  };
  const handleLeavePage = async () => {
    let data = new FormData();
    data.append("random_number", localStorage.getItem("RandomNumber") || "");
    setOpenModal(false);
    setUnsavedItems(false);

    // const params = {
    //     random_number: localStorage.getItem('RandomNumber')
    // };
    try {
      const response = await axios.post("all-sales-item-delete", data, {
        // params: params,
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.status === 200) {
        setOpenModal(false);
        setUnsavedItems(false);
        setTimeout(() => {
          if (nextPath) {
            history.push(nextPath);
          }
        }, 0);
      }

      setOpenModal(false);
      setUnsavedItems(false);
      localStorage.removeItem("RandomNumber");

      // history.replace(nextPath);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setUnsavedItems(false);
        setOpenModal(false);
        localStorage.setItem("unsavedItems", unsavedItems.toString());
        setTimeout(() => {
          history.push(nextPath);
        }, 0);
      } else {
        console.error("Error deleting items:", error);
      }
    }
  };


  /*<========================================================================= get batch list  ====================================================================> */

  const batchList = async () => {
    let data = new FormData();
    data.append("iteam_id", itemId || "");
    const params = {
      iteam_id: itemId ? itemId : "",
    };
    try {
      const res = await axios
        .post("batch-list?", data, {
          params: params,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setBatchListData(response.data.data);
          setIsAlternative(response.data.alternative_item_check);

          if (Array.isArray(response.data.data)) {
            response.data.data.forEach((item) => {
              setMRP(item.mrp);
              setPtr(item.ptr);
              setDiscount(item.discount);
            });
          } else {
            setMRP(response.data.data.mrp);
            setPtr(response.data.data.ptr);
            setDiscount(response.data.data.discount);
          }
        });
    } catch (error) {
      console.error("API error:", error);
    }
  };

  /*<========================================================================= generate random number  ====================================================================> */

  const generateRandomNumber = () => {
    if (localStorage.getItem("RandomNumber") == null) {
      const number = Math.floor(Math.random() * 100000) + 1;
      setRandomNumber(number);
      localStorage.setItem("RandomNumber", number);
    } else {
      return;
    }
  };
  /*<========================================================================= Add and Edit validation  ====================================================================> */

  const addItemValidation = async () => {

    setUnsavedItems(true);

    const newErrors = {};
    if (!mrp) {
      newErrors.mrp = "Please Select any Item Name";
      toast.error(newErrors.mrp);
    }
    if (!qty || qty <= 0) {
      // Notify the user to enter a valid quantity
      newErrors.qty = "Please enter a valid quantity.";
      toast.error(newErrors.qty);
    } else {
      // addSaleItem();
      setIsVisible(false);
      setSearchItem("");
      setBarcodeItemName("");
      setSelectedOption(null);

    }

    const isValid = Object.keys(newErrors).length === 0;
    if (isValid) {
      await addSaleItem();
      if (searchInputRef.current) {
        searchInputRef.current.focus();
        setSelectedIndex(-1); // Clear any selection
        setAutocompleteKey((prevKey) => prevKey + 1); // Re-render item Autocomplete

      }
    }
    return isValid;
  };

  /*<========================================================================= Add and Edit item function  ====================================================================> */

  const addSaleItem = async () => {
    if (isSubmitting) return false; // Prevent double submissions
    setIsSubmitting(true); // Lock
    generateRandomNumber();
    let data = new FormData();

    if (isEditMode === true) {
      data.append("item_id", itemEditID);
    } else {
      if (barcode) {
        data.append("item_id", itemId);
      } else {
        data.append("item_id", itemId ? itemId : "");
      }
    }
    // data.append("id", selectedEditItemId ? selectedEditItemId : '')
    data.append("user_id", userId);
    // data.append("item_id", barcode ? itemId : value?.id || '');
    data.append("id", selectedEditItemId || "");
    data.append("qty", qty || "");
    data.append("max_qty", maxQty || "");
    data.append("exp", expiryDate ? expiryDate : "");
    data.append("gst", gst ? gst : "");
    data.append("mrp", mrp ? mrp : "");
    data.append("unit", unit ? unit : "");
    data.append(
      "random_number",
      Number(localStorage.getItem("RandomNumber")) || ""
    );
    data.append("batch", batch ? batch : "");
    data.append("location", loc ? loc : "");
    data.append("base", base ? base : "");
    data.append("amt", itemAmount ? itemAmount : "");
    data.append("net_rate", itemAmount ? itemAmount : "");
    data.append("total_amount", totalAmount);
    data.append("ptr", ptr ? ptr : "");
    if (tempQty - qty <= 2) {
      data.append("order", "O");
    } else {
      data.append("order", order ? order : "");
    }
    data.append("discount", discount ? discount : "");
    data.append("total_gst", totalgst || "");
    data.append("today_loylti_point ", todayLoyltyPoint || "");
    const params = {
      id: selectedEditItemId || "",
    };

    // const currentQty = !isEditMode ? qty : 0;
    // const quantityDifference = maxQty - currentQty;

    try {
      const response = isEditMode
        ? await axios.post("sales-item-edit?", data, {
          params: params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        : await axios.post("sales-item-add", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

      setTotalAmount(0);
      saleItemList();
      setUnit("");
      setBatch("");
      setExpiryDate("");
      setMRP("");
      setQty("");
      setBase("");
      setGst("");
      setBatch("");
      setBarcode("");
      setLoc("");
      setOrder("");
      setIsEditMode(false);

      // toast.success(response.data.message);

      // if (quantityDifference === 1) {
      //     bulkOrderData();
      // }
    } catch (e) { } finally {
      setIsSubmitting(false); // Unlock
    }
  };
  /*<========================================================================= qty validation and calculation  ====================================================================> */

  const handleQtyChange = (e) => {
    const val = e.target.value;

    // Prevent leading zeros like "01030"
    if (/^0\d+/.test(val)) return;

    // Allow empty input to avoid auto "0"
    if (val === "") {
      setQty("");
      setOrder("");
      return;
    }

    const enteredValue = Number(val);

    if (enteredValue <= maxQty) {
      setQty(enteredValue);
      if (enteredValue === maxQty) {
        setOrder("O");
      } else {
        setOrder("");
      }
    } else {
      toast.error("Can't add qty more than stock");
      setQty(maxQty);
      setOrder("O");
    }
  };


  /*<========================================================================= reset item value  ====================================================================> */

  const resetValue = () => {
    setUnit("");
    setBatch("");
    setSearchItem("");
    setExpiryDate("");
    setMRP("");
    setBase("");
    setGst("");
    setQty("");
    setOrder("");
    setLoc("");
    setItemAmount(0);
    if (isNaN(itemAmount)) {
      setItemAmount(0);
    }
    setIsEditMode(false);
  };
  /*<========================================================================= delete item  ====================================================================> */

  const handleDeleteItem = async (saleItemId) => {
    if (!saleItemId) return;
    let data = new FormData();
    data.append("id", saleItemId ? saleItemId : "");
    const params = {
      id: saleItemId ? saleItemId : "",
    };
    try {
      await axios
        .post("sales-item-delete?", data, {
          params: params,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          saleItemList();
          setIsDelete(false);
        });
    } catch (error) {
      console.error("API error:", error);
    }
  };

  /*<========================================================================= handle table and keyboard navigation  ====================================================================> */


  const handleTableKeyDown = (e) => {
    const rows = Array.from(
      tableRef.current?.querySelectorAll("tr.cursor-pointer") || []
    );
    let currentIndex = rows.findIndex((row) => row === document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setAutoCompleteOpen(false); // Close dropdown on keyboard navigation
      if (rows.length > 0) {
        const nextIndex = currentIndex + 1 < rows.length ? currentIndex + 1 : 0;
        rows[nextIndex]?.focus();
        setHighlightedRowId(rows[nextIndex]?.dataset.id);
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setAutoCompleteOpen(false); // Close dropdown on keyboard navigation
      if (rows.length > 0) {
        const prevIndex =
          currentIndex - 1 >= 0 ? currentIndex - 1 : rows.length - 1;
        rows[prevIndex]?.focus();
        setHighlightedRowId(rows[prevIndex]?.dataset.id);
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (currentIndex >= 0 && rows[currentIndex]) {
        const itemId = rows[currentIndex].getAttribute("data-id");
        const item = batchListData.find(
          (item) => String(item.id) === String(itemId)
        );
        if (item) {
          handlePassData(item);
          setHighlightedRowId(itemId);
          setAutoCompleteOpen(false); // Close dropdown on Enter
        }
      }
    }
  };
  {/*<====================================================================== row select    =====================================================================> */ }

  useEffect(() => {
    if (isVisible && tableRef.current) {
      const firstRow = tableRef.current.querySelector("tr.cursor-pointer");
      if (firstRow) {
        firstRow.focus();
        setHighlightedRowId(firstRow.getAttribute("data-id"));
      }
    }
  }, [isVisible, batchListData]);
  {/*<====================================================================== send whatsapp bil   =====================================================================> */ }

  const handleSendInvoice = async (customer, Amount, date, billNo) => {
    const url = "https://web.wabridge.com/api/createmessage";

    const two = 24;
    const three = "krishna";
    const four = 20 / 20 / 26;
    const five = 5;
    const six = "91986543210";
    const seven = "sagar";

    const payload = {
      "app-key": "db8ce965-029b-4f74-aade-04d137663b12",
      "auth-key": "039d46d11eab7e7863eb651db09f8eac63198154bf41302430",
      destination_number: customer.phone_number, // change this
      template_id: "1291715845234841",
      device_id: "6747f73e1bcbc646dbdc8c5f",
      variables: [
        customer.name,
        Amount,
        localStorage.getItem("UserName"),
        date,
        billNo,
        localStorage.getItem("contact"),
        localStorage.getItem("UserName"),
      ],
      media: "",
      message: "",
    };

    try {
      const response = await axios.post(url, payload);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  {/*<====================================================================== Handle PDF download   =====================================================================> */ }

  const pdfGenerator = async (id) => {
    console.log(id);
    let data = new FormData();
    data.append("id", id);
    setIsLoading(true);
    try {
      await axios
        .post("sales-pdf-downloads", data, {
          params: { id },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const PDFURL = response.data.data.pdf_url;
          toast.success(response.data.meassage);
          handlePdf(PDFURL);
        });
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePdf = (url) => {
    if (typeof url === "string") {
      window.open(url, "_blank");
    } else {
      console.error("Invalid URL for the PDF");
    }
  };

  {/*<====================================================================== Autocomplete focus   =====================================================================> */ }

  // Add useEffect to close dropdown if Autocomplete input is not focused
  useEffect(() => {
    function handleDocumentFocus() {
      if (autoCompleteOpen && searchInputRef.current && document.activeElement !== searchInputRef.current) {
        setAutoCompleteOpen(false);
      }
    }
    document.addEventListener('focusin', handleDocumentFocus);
    return () => {
      document.removeEventListener('focusin', handleDocumentFocus);
    };
  }, [autoCompleteOpen]);
  {/*<====================================================================== pill /refill timing   =====================================================================> */ }

  const updatePillTiming = (item, updated) => {
    const total = Number(updated.morning || 0) + Number(updated.noon || 0) + Number(updated.night || 0);
    const refillDays = total > 0 ? Math.floor(item.qty / total) : 0;

    const refillDate = new Date();
    refillDate.setDate(refillDate.getDate() + refillDays);

    setPillTimes((prev) => ({
      ...prev,
      [item.id]: {
        ...updated,
        refillDays,
        refillDate,
      },
    }));
  };
  {/*<====================================================================== pill /refill remider   =====================================================================> */ }

  const handleReminder = async () => {
    const selectedItems = Object.keys(checkedItems).filter((id) => checkedItems[id]);

    for (const id of selectedItems) {
      const item = ItemSaleList.sales_item.find((i) => i.id === parseInt(id));
      const dose = pillTimes[id];

      if (!item || !dose) continue;

      const data = new FormData();
      data.append("item_id", item.id);
      data.append("refill_date", dose.refillDate.toLocaleDateString("en-GB")); // dd/mm/yyyy
      data.append("morning", dose.morning);
      data.append("noon", dose.noon);
      data.append("night", dose.night);
      data.append("customer_id")

      try {
        const response = await axios.post("pill-refill-reminder?", data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.status === 200) {
          //console.log("response===>", response.data);
          toast.success("Reminder(s) set successfully");
          setOpenReminderPopUp(false);


        } else if (response.data.status === 400) {
          toast.error(response.data.message);
        } else if (response.data.status === 401) {
          history.push("/");
          localStorage.clear();
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error setting reminder. Please try again later.");
        }
      }
    }
  };

  return (
    <>

      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="p-6"
        style={{
          height: "calc(-125px + 100vh)",
          overflow: "auto",
        }}>

        <div >

          {/*<====================================================================== header   =====================================================================> */}

          <div className="flex flex-wrap items-center justify-between gap-2 row border-b border-dashed pb-4 border-[var(--color1)]" >

            <div className="flex items-center gap-2">
              <span
                className="text-[var(--color2)] font-bold text-[20px] cursor-pointer"
                onClick={() => {
                  history.push("/salelist");
                }}
              >
                Sales
              </span>
              <span className="w-6 h-6">

                <ArrowForwardIosIcon
                  fontSize="small"
                  className="text-[var(--color1)]"
                />
              </span>

              <span className="text-[var(--color1)] font-bold text-[20px]">New</span>

              <BsLightbulbFill className="w-6 h-6 text-[var(--color2)] hover-yellow"
                onClick={() => setShowModal(true)} />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center rounded-[4px] bg-[var(--color1)] px-4 py-2 text-white hover:bg-[var(--color2)] transition"
                onClick={() => setOpenReminderPopUp(true)}
              >
                <FaBell className="mr-2" />
                Set Reminder
              </button>

              <button
                type="button"
                className="inline-flex items-center rounded-[4px] bg-[var(--color1)] px-4 py-2 text-white hover:bg-[var(--color2)] transition"
                onClick={handelAddItemOpen}
              >
                <ControlPointIcon className="mr-2" />
                Add New Item
              </button>

              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={paymentType}
                className="payment_divv"
                onChange={(e) => {
                  setPaymentType(e.target.value);
                  setUnsavedItems(true);
                }}
                size="small"
                sx={{ minWidth: "150px" }}
              >
                <MenuItem value="cash">Cash</MenuItem>
                <MenuItem value="credit">Credit</MenuItem>
                {bankData?.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.bank_name}
                  </MenuItem>
                ))}
              </Select>

              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={pickup}
                className="payment_divv "
                onChange={(e) => {
                  setPickup(e.target.value);
                  setUnsavedItems(true);
                }}
                size="small"
                sx={{
                  minWidth: "150px",
                  "& .MuiInputBase-input": {
                    display: "flex",
                    whiteSpace: "nowrap",
                    alignItems: "center",
                    gap: "1rem",
                  },
                }}
              >
                {pickupOptions.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.label}
                    className="gap-4"
                  >
                    {option.icon && option.icon}
                    {option.label}
                  </MenuItem>
                ))}
              </Select>

              <div
                className="relative inline-block z-index-1000"
                onMouseEnter={() => {
                  clearTimeout(timeoutRef.current);
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
                }}
              >
                <button
                  type="button"
                  className="h-10 rounded-l-[4px] bg-[var(--color1)] px-6 text-white hover:bg-[var(--color2)] transition align-middle"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  onClick={() => {
                    setBillSaveDraft("1");
                    handleSubmit("1");
                  }}
                >
                  Save
                </button>

                <button
                  type="button"
                  className="h-10 rounded-r-[4px] bg-[var(--color1)] px-2 text-white hover:bg-[var(--color2)] transition align-middle"
                  onClick={() => setIsOpen((v) => !v)}
                  ref={submitButtonRef}
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                >
                  <IoCaretDown className="text-white" />
                </button>

                {isOpen && (
                  <div className="absolute right-1 top-14 w-36 bg-white shadow-lg  overflow-hidden ring-1 ring-[var(--color1)]">
                    <ul className="text-slate-800">
                      <li
                        onClick={() => {
                          setBillSaveDraft("1");
                          handleSubmit("1");
                        }}
                        className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[var(--color2)] hover:text-white"
                        role="menuitem"
                      >
                        <SaveIcon />
                        Save
                      </li>
                      <li
                        onClick={() => {
                          setBillSaveDraft("0");
                          handleSubmit("0");
                        }}
                        className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[var(--color2)] hover:text-white border-t border-[var(--color1)]"
                        role="menuitem"
                      >
                        <SaveAsIcon />
                        Draft
                      </li>
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>


          {/*<====================================================================== Top detail   =====================================================================> */}


          <div className=" flex gap-4  mt-4">
            <div className="flex flex-row gap-4 overflow-x-auto w-full">
              <div>
                <span
                  className="title mb-2 flex  items-center gap-2"
                >
                  Customer Mobile / Name <span className="text-red-600">*</span>
                  <FaPlusCircle
                    className="primary cursor-pointer"
                    onClick={() => {
                      setOpenCustomer(true);
                    }}
                  />
                </span>

                <Autocomplete
                  value={customer}
                  onChange={handleCustomerOption}
                  inputValue={searchQuery}
                  onInputChange={(event, newInputValue) => {
                    setSearchQuery(newInputValue);
                  }}
                  options={customerDetails}
                  getOptionLabel={(option) =>
                    option.name
                      ? `${option.name} [${option.phone_number}] [${option.roylti_point}] `
                      : option.phone_number || ""
                  }
                  isOptionEqualToValue={(option, value) =>
                    option.phone_number === value.phone_number
                  }
                  loading={isLoading}
                  sx={{
                    width: "100%",
                    minWidth: {
                      xs: "350px",
                      sm: "400px",
                      md: "400px",
                      lg: "400px",
                    },

                    "& .MuiAutocomplete-inputRoot": {
                      padding: "8px 8px",
                    },
                  }}
                  renderOption={(props, option) => (
                    <ListItem {...props}>
                      <ListItemText
                        primary={`${option.name} `}
                        secondary={`Mobile No: ${option.phone_number} | Loyalty Point: ${option.roylti_point} | Due Payment: ${option.roylti_point}`}
                      />
                    </ListItem>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Search by Mobile, Name"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {isLoading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          fontSize: "1rem",
                          color: "black",
                        },
                      }}
                    />
                  )}
                />

              </div>
              <div
                className="detail custommedia col-12 col-md-3"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              >
                <span
                  className="heading mb-2 title flex flex-row justify-between"
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "var(--color1)",

                  }}
                >
                  <span className="flex flex-row gap-1">
                    Doctor
                    <FaPlusCircle
                      className="icon primary"
                      onClick={() => {
                        setOpenAddPopUp(true);
                        setUnsavedItems(true);
                      }}
                    />
                  </span>

                  <p
                    onClick={() => history.push("/more/doctors")}
                    className="cursor-pointer self-end text-xs text-white bg-[var(--color5)] px-2 rounded-sm"
                  >
                    set default
                  </p>

                </span>

                <Autocomplete
                  value={doctor}
                  onChange={(e, newVal) => setDoctor(newVal)}
                  inputValue={searchDoctor}
                  onInputChange={(event, newInputValue) => {
                    setSearchDoctor(newInputValue);
                  }}
                  options={doctorData}
                  getOptionLabel={(option) =>
                    option?.name
                      ? `${option.name} [${option.phone_number || ''}]`
                      : option?.phone_number || ''
                  }

                  isOptionEqualToValue={(option, value) =>
                    option?.phone_number === value?.phone_number
                  }

                  loading={isLoading}
                  sx={{
                    width: "100%",
                    // minWidth: {
                    //     xs: '350px',
                    //     sm: '500px',
                    //     md: '500px',
                    //     lg: '400px',
                    // },
                    "& .MuiInputBase-root": {
                      fontSize: "1.10rem",
                    },
                    "& .MuiAutocomplete-inputRoot": {
                      padding: "8px 8px",
                    },
                  }}
                  renderOption={(props, option) => (
                    <ListItem {...props}>
                      <ListItemText
                        primary={`${option.name} `}
                        secondary={`Mobile No: ${option.phone_number}`}
                      />
                    </ListItem>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Search by DR. Name, Mobile Number"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {isLoading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          fontSize: "1rem",
                          color: "black",
                        },
                      }}
                    />
                  )}
                />
              </div>

              <div
                className="detail custommedia col-12 col-md-3"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              >
                <span
                  className="heading mb-2 title"
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "var(--color1)",
                  }}
                >
                  Select Date{" "}
                  {/* <FaPlusCircle
                        className="icon primary"
                        onClick={() => {
                          setOpenAddPopUp(true);
                          setUnsavedItems(true);
                        }}
                      /> */}
                </span>

                <DatePicker
                  className="custom-datepicker w-100"
                  selected={selectedDate}
                  variant="outlined"
                  onChange={(newDate) => setSelectedDate(newDate)}
                  dateFormat="dd/MM/yyyy"
                  filterDate={(date) => !isDateDisabled(date)}
                />
              </div>
              <div
                className="detail custommedia col-12 col-md-3"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              >
                <span
                  className="heading mb-2 title"
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "var(--color1)",
                  }}
                >
                  Scan Barcode
                  {/* <FaPlusCircle
                        className="icon primary"
                        onClick={() => {
                          setOpenAddPopUp(true);
                          setUnsavedItems(true);
                        }}
                      /> */}
                </span>
                <TextField
                  id="outlined-number"
                  type="number"
                  size="small"
                  value={barcode}
                  placeholder="scan barcode"
                  // inputRef={inputRef10}
                  // onKeyDown={handleKeyDown}
                  sx={{ width: "50%", backgroundColor: "white" }}
                  onChange={(e) => {
                    setBarcode(e.target.value);
                  }}
                />
              </div>
            </div>

          </div>
          {/*<====================================================================== item table   =====================================================================> */}

          <div className="table-container">
            <table className="w-full border-collapse item-table">
              <thead>
                <tr>
                  <th>
                    <div className="flex justify-center items-center gap-2">
                      Search Item Name{" "}
                      <span className="text-red-600 ">*</span>
                      <FaPlusCircle
                        className="primary cursor-pointer"
                        onClick={() => {
                          setOpenAddItemPopUp(true);
                        }}
                      />
                    </div>
                  </th>
                  <th>
                    Unit <span className="text-red-600 ">*</span>
                  </th>
                  <th>
                    Batch <span className="text-red-600 ">*</span>{" "}
                  </th>
                  <th>
                    Expiry <span className="text-red-600 ">*</span>
                  </th>
                  <th>
                    MRP <span className="text-red-600 ">*</span>
                  </th>
                  <th>Base</th>
                  <th>
                    GST% <span className="text-red-600 ">*</span>
                  </th>
                  <th>Qty. </th>
                  <th>Loc.</th>
                  <th style={{ textAlign: "center" }}>
                    {" "}
                    <div style={{ display: "flex", flexWrap: "nowrap" }}>
                      Order
                      <Tooltip title="Please Enter only (o)" arrow>
                        <Button
                          style={{
                            justifyContent: "left",
                            color: "var(--color1)",
                          }}
                        >
                          <GoInfo
                            className="absolute"
                            style={{ fontSize: "1rem" }}
                          />
                        </Button>
                      </Tooltip>
                    </div>
                  </th>
                  <th
                    style={{
                      padding: "10px 15px",
                      textAlign: "center",
                    }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Input row (with inner table for autocomplete/batch selection) */}
                <tr style={{ borderBottom: "1px solid lightgray" }}>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <div
                      className="flex gap-5 "
                    >

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          width: "100%",
                          alignItems: "center",
                        }}
                      ><Autocomplete
                          key={autocompleteKey}
                          value={selectedOption}
                          size="small"
                          sx={{
                            width: "100%",
                            minWidth: "450px",
                          }}
                          onChange={handleOptionChange}
                          onInputChange={handleInputChange}
                          open={autoCompleteOpen}
                          onOpen={() => setAutoCompleteOpen(true)}
                          onClose={() => setAutoCompleteOpen(false)}
                          getOptionLabel={(option) => `${option.iteam_name || ""}`}
                          options={itemList}
                          renderOption={(props, option) => (
                            <ListItem {...props} key={option.id}>
                              <ListItemText
                                primary={`${option.iteam_name}, (${option.company})`}
                                secondary={`Stock: ${option.stock} | MRP: ${option.mrp} | Location: ${option.location}`}
                              />
                            </ListItem>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              inputRef={searchInputRef}
                              variant="outlined"
                              id="searchResults"
                              autoFocus
                              placeholder="Search Item Name..."
                              InputProps={{
                                ...params.InputProps,
                                style: {
                                  height: 40,

                                  fontSize: "1.2rem",
                                },
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon
                                      sx={{
                                        color: "var(--color1)",
                                        cursor: "pointer",
                                      }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                "& .MuiInputBase-input::placeholder":
                                {
                                  fontSize: "1rem",
                                  color: "black",
                                },
                              }}
                              onFocus={() => setSelectedIndex(-1)}

                              onKeyDown={(e) => {
                                const key = e.key;
                                const isTab = key === "Tab";
                                const isShiftTab = isTab && e.shiftKey;
                                const isEnter = key === "Enter";
                                const isArrowKey = key === "ArrowDown" || key === "ArrowUp";

                                // Only trigger custom logic if searchItem is empty/null
                                if (
                                  isArrowKey &&
                                  !isShiftTab &&
                                  (searchItem === null || searchItem === "") &&
                                  !selectedOption
                                ) {
                                  e.preventDefault();
                                  setAutocompleteDisabled(true); // Disable Autocomplete
                                  setAutoCompleteOpen(false);    // Close dropdown
                                  setTimeout(() => {
                                    // Blur Autocomplete input if possible
                                    if (searchInputRef.current) searchInputRef.current.blur();
                                    // Focus table if possible
                                    if (tableRef1.current) tableRef1.current.focus();
                                    // Select first or last row in ItemSaleList if available
                                    if (ItemSaleList?.sales_item?.length > 0) {
                                      setSelectedIndex(key === "ArrowDown" ? 0 : ItemSaleList.sales_item.length - 1);
                                    } else {
                                      setSelectedIndex(-1);
                                    }
                                  }, 0);
                                  return;
                                }

                                // If dropdown is open, let MUI handle up/down/enter/tab
                                if ((isEnter || isTab) && autoCompleteOpen) return;

                                // On Enter/Tab, move to next input or show error if no selection
                                if (isEnter || isTab) {
                                  e.preventDefault();
                                  if (!selectedOption) {
                                    setTimeout(() => toast.error("Please select an Item"), 100);
                                  } else {
                                    setTimeout(() => {
                                      if (inputRef1.current) inputRef1.current.focus();
                                    }, 100);
                                  }
                                  return;
                                }
                              }}
                            />
                          )}
                        />

                      </Box>
                      {isVisible && value && !batch && (
                        <Box
                          sx={{
                            minWidth: {
                              xs: "200px",
                              sm: "500px",
                              md: "1000px",
                            },
                            backgroundColor: "white",
                            position: "absolute",
                            marginTop: "50px",
                            zIndex: 1,
                          }}
                          id="tempId"
                        >
                          <div
                            className="custom-scroll-sale"
                            style={{ width: "100%" }}
                            tabIndex={0}
                            onKeyDown={handleTableKeyDown}
                          >
                            <table
                              ref={tableRef}
                              tabIndex={0}
                              style={{
                                width: "100%",
                                borderCollapse: "collapse",
                              }}
                            >
                              <thead>
                                {isAlternative && (
                                  <tr className="customtable">
                                    <th
                                      className="saleTable highlighted-row"
                                      colSpan={8}
                                    >
                                      Alternate Medicine
                                    </th>
                                  </tr>
                                )}

                                <tr className="customtable">
                                  <th>Item Name</th>
                                  <th>Batch Number</th>
                                  <th>Unit</th>
                                  <th>Expiry Date</th>
                                  <th>MRP</th>
                                  <th>QTY</th>
                                  <th>Loc</th>
                                </tr>
                              </thead>

                              <tbody>
                                {batchListData.length > 0 ? (
                                  <>
                                    {batchListData.map((item) => (
                                      <tr
                                        className={`cursor-pointer saleTable custom-hover ${highlightedRowId ===
                                          String(item.id)
                                          ? "highlighted-row"
                                          : ""
                                          }`}
                                        key={item.id}
                                        data-id={item.id}
                                        tabIndex={0}
                                        style={{
                                          border:
                                            "1px solid rgba(4, 76, 157, 0.1)",
                                          padding: "10px",
                                          outline: "none",
                                        }}
                                        onClick={() =>
                                          handlePassData(item)
                                        }
                                        onFocus={() => setAutoCompleteOpen(false)} // Close dropdown on focus
                                        onMouseEnter={(e) => {
                                          const hoveredRow = e.currentTarget;
                                          setHighlightedRowId(hoveredRow);
                                        }}

                                      >
                                        <td className="text-base font-semibold">
                                          {item.iteam_name}
                                        </td>
                                        <td className="text-base font-semibold">
                                          {item.batch_number}
                                        </td>
                                        <td className="text-base font-semibold">
                                          {item.unit}
                                        </td>
                                        <td className="text-base font-semibold">
                                          {item.expiry_date}
                                        </td>
                                        <td className="text-base font-semibold">
                                          {item.mrp}
                                        </td>
                                        <td className="text-base font-semibold">
                                          {item.qty}
                                        </td>
                                        <td className="text-base font-semibold">
                                          {item.location}
                                        </td>
                                      </tr>
                                    ))}
                                  </>
                                ) : (
                                  <tr>
                                    <td
                                      colSpan={6}
                                      style={{
                                        textAlign: "center",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      No record found
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </Box>
                      )}

                    </div>
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      id="outlined-number"
                      disabled
                      type="number"
                      inputRef={inputRef1}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 0 for Unit, so none)
                          e.preventDefault();
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          e.preventDefault();
                          if (itemRowInputOrder[1]?.current) {
                            itemRowInputOrder[1].current.focus();
                          }
                        }
                      }}
                      size="small"
                      value={unit}
                      sx={{ width: "100px" }}
                      onChange={(e) => {
                        setUnit(e.target.value);
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      id="outlined-number"
                      sx={{ width: "100px" }}
                      size="small"
                      disabled
                      value={batch}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 1 for Batch, so 0)
                          e.preventDefault();
                          if (itemRowInputOrder[0]?.current) {
                            itemRowInputOrder[0].current.focus();
                          }
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          e.preventDefault();
                          if (itemRowInputOrder[2]?.current) {
                            itemRowInputOrder[2].current.focus();
                          }
                        }
                      }}
                      onChange={(e) => {
                        setBatch(e.target.value);
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      id="outlined-number"
                      disabled
                      size="small"
                      sx={{ width: "100px" }}
                      inputRef={inputRef3}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 2 for Expiry, so 1)
                          e.preventDefault();
                          if (itemRowInputOrder[1]?.current) {
                            itemRowInputOrder[1].current.focus();
                          }
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          e.preventDefault();
                          if (itemRowInputOrder[3]?.current) {
                            itemRowInputOrder[3].current.focus();
                          }
                        }
                      }}
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      placeholder="MM/YY"
                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      disabled
                      id="outlined-number"
                      type="number"
                      sx={{ width: "100px" }}
                      size="small"
                      inputRef={inputRef4}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 3 for MRP, so 2)
                          e.preventDefault();
                          if (itemRowInputOrder[2]?.current) {
                            itemRowInputOrder[2].current.focus();
                          }
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          e.preventDefault();
                          if (itemRowInputOrder[4]?.current) {
                            itemRowInputOrder[4].current.focus();
                          }
                        }
                      }}
                      value={mrp}
                      onChange={(e) => {
                        setMRP(e.target.value);
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      autoComplete="off"
                      id="outlined-number"
                      type="number"
                      sx={{ width: "100px" }}
                      size="small"
                      inputRef={inputRef5}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 4 for Base, so 3)
                          e.preventDefault();
                          if (itemRowInputOrder[3]?.current) {
                            itemRowInputOrder[3].current.focus();
                          }
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          if (base === "" || base === null || base === undefined) {
                            toast.error("Base is required");
                            e.preventDefault();
                            return;
                          }
                          e.preventDefault();
                          if (itemRowInputOrder[5]?.current) {
                            itemRowInputOrder[5].current.focus();
                          }
                        }
                      }}
                      value={base}
                      onChange={(e) => {
                        setBase(e.target.value);
                      }}

                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      id="outlined-number"
                      type="number"
                      disabled
                      size="small"
                      inputRef={inputRef6}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 5 for GST, so 4)
                          e.preventDefault();
                          if (itemRowInputOrder[4]?.current) {
                            itemRowInputOrder[4].current.focus();
                          }
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          e.preventDefault();
                          if (itemRowInputOrder[6]?.current) {
                            itemRowInputOrder[6].current.focus();
                          }
                        }
                      }}
                      sx={{ width: "100px" }}
                      value={gst}
                      onChange={(e) => {
                        setGst(e.target.value);
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      autoComplete="off"
                      id="outlined-number"
                      type="number"
                      sx={{ width: "100px" }}
                      size="small"
                      inputRef={inputRef7}
                      value={qty}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 6 for Qty, so 5)
                          e.preventDefault();
                          if (itemRowInputOrder[5]?.current) {
                            itemRowInputOrder[5].current.focus();
                          }
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          if (qty === "" || qty === null || qty === undefined) {
                            toast.error("Qty is required");
                            e.preventDefault();
                            return;
                          }
                          e.preventDefault();
                          if (itemRowInputOrder[7]?.current) {
                            itemRowInputOrder[7].current.focus();
                          }
                        }
                      }}
                      onChange={(e) => {
                        handleQtyChange(e);
                        if (
                          (e.key === "Enter" || e.key === "Tab") &&
                          Number(qty) === maxQty
                        ) {
                          setOrder("O");
                        }
                      }}
                    />
                  </td>

                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      id="outlined-number"
                      size="small"
                      inputRef={inputRef9}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 7 for Loc, so 6)
                          e.preventDefault();
                          if (itemRowInputOrder[6]?.current) {
                            itemRowInputOrder[6].current.focus();
                          }
                          return;
                        }
                        if (e.key === "Enter" || e.key === "Tab") {
                          e.preventDefault();
                          if (itemRowInputOrder[8]?.current) {
                            itemRowInputOrder[8].current.focus();
                          }
                        }
                      }}
                      disabled
                      sx={{ width: "100px" }}
                      value={loc}
                      onChange={(e) => {
                        setLoc(e.target.value);
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <TextField
                      autoComplete="off"
                      id="outlined-number"
                      sx={{ width: "100px" }}
                      size="small"
                      value={order}
                      inputRef={inputRef8}
                      onKeyDown={(e) => {
                        if (e.key === "Tab" && e.shiftKey) {
                          // Move to previous input (index 8 for Order, so 7)
                          e.preventDefault();
                          if (itemRowInputOrder[7]?.current) {
                            itemRowInputOrder[7].current.focus();
                          }
                          return;
                        }
                        handleKeyDown(e);
                        if (e.key === "Enter") {
                          addItemValidation();
                        }
                      }}
                      onChange={(e) => {
                        const value = e.target.value.toUpperCase();
                        if (value === "" || value === "O") {
                          setOrder(value);
                        }
                      }}
                    />
                  </td>
                  <td
                    className="total "
                    style={{ padding: "10px", textAlign: "center" }}
                  >
                    {itemAmount}
                  </td>
                </tr>

                {ItemSaleList?.sales_item?.map((item, index) => (
                  <tr
                    key={item.id}
                    style={{ whiteSpace: "nowrap" }}
                    onClick={() => {
                      handleEditClick(item);
                      setSelectedIndex(index);
                    }}
                    className={`item-List  cursor-pointer ${index === selectedIndex ? "highlighted-row" : ""}`}
                  >
                    <td
                      style={{
                        display: "flex",
                        gap: "8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <BorderColorIcon
                        style={{ color: "var(--color1)" }}
                        color="primary"
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditClick(item);
                        }}
                      />
                      <DeleteIcon
                        className="delete-icon"
                        style={{ color: "#F20000" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDelete(true);
                          setSaleItemId(item.id);

                        }}
                      />
                      {item.iteam_name || barcodeItemName}
                    </td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.unit || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.batch || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.exp || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.mrp || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.base || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.gst || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.qty || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.location || "-----"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.order ? item.order : "------"}</td>
                    <td style={{ width: "110px", textAlign: "center", verticalAlign: "middle" }} >{item.net_rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* } */}
          {/*<====================================================================== total and other details =====================================================================> */}

          <div
            className="sale_filtr_add"
            style={{
              background: "var(--color1)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              width: "100%",
              bottom: "0",
              left: "0",
            }}
          >
            <div
              className=""
              style={{
                display: "flex",
                whiteSpace: "nowrap",
                position: "sticky",
                left: "0",
                overflow: "auto",
                padding: "20px",
              }}
            >
              <div
                className="gap-2 invoice_total_fld"
                style={{ display: "flex" }}
              >
                <label className="font-bold">Total GST : </label>

                <span style={{ fontWeight: 600 }}> {totalgst} </span>
              </div>
              <div
                className="gap-2 invoice_total_fld"
                style={{ display: "flex" }}
              >
                <label className="font-bold">Total Base : </label>
                <span style={{ fontWeight: 600 }}> {totalBase} </span>
              </div>
              <div
                className="gap-2 invoice_total_fld"
                style={{ display: "flex" }}
              >
                <label className="font-bold">Profit : </label>
                <span style={{ fontWeight: 600 }}>
                  ₹ {marginNetProfit || 0} (
                  {Number(totalMargin || 0).toFixed(2)}%)
                </span>
              </div>
              <div
                className="gap-2 invoice_total_fld"
                style={{ display: "flex" }}
              >
                <label className="font-bold">Total Net Rate : </label>
                <span style={{ fontWeight: 600 }}>₹ {totalNetRate}</span>
              </div>
            </div>
            <hr
              style={{
                opacity: 0.5,
                position: "sticky",
                left: "0",
                width: "100%",
              }}
            />
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                whiteSpace: "nowrap",
                padding: "20px",
                alignItems: "baseline",
                overflow: "auto",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  left: "0",
                }}
              >
                <div
                  className="gap-2 invoice_total_fld"
                  style={{ display: "flex" }}
                >
                  <label className="font-bold">Today Points : </label>
                  {todayLoyltyPoint || 0}
                </div>
                <div
                  className="gap-2 invoice_total_fld"
                  style={{ display: "flex" }}
                >
                  <label className="font-bold">Previous Points : </label>
                  {Math.max(0, previousLoyaltyPoints - loyaltyVal) || 0}
                </div>
                <div
                  className="gap-2 invoice_total_fld"
                  style={{ display: "flex" }}
                >
                  <label className="font-bold">Redeem : </label>
                  <Input
                    type="number"
                    value={loyaltyVal}
                    // onChange={(e) => { setLoyaltyVal(e.target.value) }}
                    onChange={(e) => {
                      const value = e.target.value;

                      const numericValue = Math.floor(Number(value));

                      const maxAllowedPoints = Math.min(
                        maxLoyaltyPoints,
                        totalAmount
                      );

                      if (
                        numericValue >= 0 &&
                        numericValue <= maxAllowedPoints
                      ) {
                        setLoyaltyVal(numericValue);
                      } else if (numericValue < 0) {
                        setLoyaltyVal(0);
                      }
                      setUnsavedItems(true);
                    }}
                    onKeyPress={(e) => {
                      const value = e.target.value;
                      const isMinusKey = e.key === "-";

                      if (!/[0-9.-]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }

                      if (isMinusKey && value.includes("-")) {
                        e.preventDefault();
                      }
                    }}
                    size="small"
                    style={{
                      width: "70px",
                      background: "none",
                      borderBottom: "1px solid gray",
                      justifyItems: "end",
                      outline: "none",
                      color: "white",
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "35px",
                      },
                      "& .MuiInputBase-input": { textAlign: "end" },
                    }}
                  />
                  {/* {previousLoyaltyPoints} */}
                </div>
              </div>

              <div style={{ display: "flex", whiteSpace: "nowrap" }}>
                <div
                  className="gap-2 "
                  onClick={toggleModal}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <label className="font-bold">Net Amount : </label>
                  <span
                    className="gap-1"
                    style={{
                      fontWeight: 800,
                      fontSize: "22px",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {netAmount}
                    <FaCaretUp />
                  </span>
                </div>

                <Modal
                  show={isModalOpen}
                  onClose={toggleModal}
                  size="lg"
                  position="bottom-center"
                  className="modal_amount"
                // style={{ width: "50%" }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--COLOR_UI_PHARMACY)",
                      color: "white",
                      padding: "20px",
                      fontSize: "larger",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h2 style={{ textTransform: "uppercase" }}>
                      invoice total
                    </h2>
                    <IoMdClose
                      onClick={toggleModal}
                      cursor={"pointer"}
                      size={30}
                    />
                  </div>
                  <div
                    style={{
                      background: "white",
                      padding: "20px",
                      width: "100%",
                      maxWidth: "600px",
                      margin: "0 auto",
                      lineHeight: "2.5rem",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <label className="font-bold">Total Amount : </label>
                      <span style={{ fontWeight: 600 }}>{totalAmount}</span>
                    </div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <label className="font-bold">Discount(%) : </label>
                      <Input
                        type="number"
                        value={finalDiscount}
                        onKeyPress={(e) => {
                          if (
                            !/[0-9.]/.test(e.key) &&
                            e.key !== "Backspace"
                          ) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          let newValue = e.target.value;

                          if (newValue > 100) {
                            setFinalDiscount(100);
                          } else if (newValue >= 0) {
                            setFinalDiscount(newValue);
                          }
                        }}
                        size="small"
                        style={{
                          width: "70px",
                          background: "none",
                          // borderBottom: "1px solid gray",
                          outline: "none",
                          justifyItems: "end",
                        }}
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "35px",
                          },
                          "& .MuiInputBase-input": { textAlign: "end" },
                        }}
                      />
                    </div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <label className="font-bold">Other Amount : </label>
                      <Input
                        type="number"
                        value={otherAmt}
                        onKeyPress={(e) => {
                          const value = e.target.value;
                          const isMinusKey = e.key === "-";

                          if (
                            !/[0-9.-]/.test(e.key) &&
                            e.key !== "Backspace"
                          ) {
                            e.preventDefault();
                          }

                          if (isMinusKey && value.includes("-")) {
                            e.preventDefault();
                          }
                        }}
                        onChange={handleOtherAmtChange}
                        size="small"
                        style={{
                          width: "70px",
                          background: "none",
                          // borderBottom: "1px solid gray",
                          justifyItems: "end",
                          outline: "none",
                        }}
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "35px",
                          },
                          "& .MuiInputBase-input": { textAlign: "end" },
                        }}
                      />
                    </div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <label className="font-bold">
                        Loyalty Points Redeem:{" "}
                      </label>
                      <span>{loyaltyVal || 0}</span>
                    </div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "5px",
                      }}
                    >
                      <label className="font-bold">
                        Discount Amount :{" "}
                      </label>
                      {discountAmount !== 0 && (
                        <span>
                          {discountAmount > 0
                            ? `-${discountAmount}`
                            : discountAmount}
                        </span>
                      )}
                    </div>

                    <div
                      className=""
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "5px",
                        borderTop:
                          "1px solid var(--toastify-spinner-color-empty-area)",
                        paddingTop: "5px",
                      }}
                    >
                      <label className="font-bold">Round Off : </label>
                      <span>{!roundOff ? 0 : roundOff}</span>
                    </div>

                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        justifyContent: "space-between",
                        borderTop: "2px solid var(--COLOR_UI_PHARMACY)",
                        paddingTop: "5px",
                      }}
                    >
                      <label className="font-bold">Net Amount: </label>
                      <span
                        style={{
                          fontWeight: 800,
                          fontSize: "22px",
                          color: "var(--COLOR_UI_PHARMACY)",
                        }}
                      >
                        {netAmount}
                      </span>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>


        </div>



        {/*<====================================================================== Add Doctor  =====================================================================> */}

        <Dialog open={openAddPopUp} className="custom-dialog">
          <DialogTitle id="alert-dialog-title" className="secondary">
            Add Doctor
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => {
              setOpenAddPopUp(false);
              setDoctorName("");
              setClinic("");
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#ffffff",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div
                className="bg-white"
                style={{
                  alignItems: "center",
                  gap: "15px",
                  marginBlock: "20px",
                }}
              >
                <div
                  className="mainform bg-white rounded-lg gap-2"
                  style={{ padding: "20px" }}
                >
                  {/* Doctor Name */}
                  <div className="fields add_new_item_divv">
                    <label className="label secondary">
                      Doctor Name <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      id="outlined-multiline-static"
                      size="small"
                      value={doctorName}
                      onChange={(e) => {
                        setDoctorName(e.target.value);
                        setUnsavedItems(true);
                      }}
                      style={{ minWidth: 300 }}
                      inputRef={(el) => (inputRefs.current[0] = el)}
                      onKeyDown={(e) => handleKeyDown(e, 0)}
                      inputProps={{
                        style: { textTransform: "uppercase" },
                        autoComplete: "off",
                      }}
                    />
                  </div>

                  {/* Clinic Name */}
                  <div className="fields add_new_item_divv">
                    <label className="label secondary">
                      Clinic Name <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      id="outlined-multiline-static"
                      size="small"
                      value={clinic}
                      onChange={(e) => {
                        setClinic(e.target.value);
                        setUnsavedItems(true);
                      }}
                      style={{ minWidth: 300 }}
                      inputRef={(el) => (inputRefs.current[1] = el)}
                      onKeyDown={(e) => handleKeyDown(e, 1)}
                      inputProps={{
                        autoComplete: "off",
                      }}
                    />
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className="px-3 pb-3">
              <Button
                autoFocus
                variant="contained"
                color="success"
                onClick={AddDoctorRecord}
                ref={(el) => (inputRefs.current[2] = el)}
              >
                Save
              </Button>
            </div>
          </DialogActions>
        </Dialog>

        {/*<====================================================================== Add customer  =====================================================================> */}
        <Dialog open={openCustomer} className="custom-dialog">
          <DialogTitle id="alert-dialog-title" className="primary">
            Add Customer
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => {
              setOpenCustomer(false);
              setCustomerName("");
              setMobileNo("");
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#ffffff",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div
                className="bg-white"
                style={{
                  alignItems: "center",
                  gap: "15px",
                  marginBlock: "20px",
                }}
              >
                <div
                  className="mainform bg-white rounded-lg gap-2"
                  style={{ padding: "20px" }}
                >
                  {/* Customer Name */}
                  <div className="fields add_new_item_divv">
                    <label className="label secondary">
                      Customer Name <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      id="outlined-multiline-static"
                      size="small"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value.toUpperCase());
                        setUnsavedItems(true);
                      }}
                      style={{ minWidth: 300 }}
                      inputRef={(el) => (inputRefs.current[0] = el)}
                      onKeyDown={(e) => handleKeyDown(e, 0)}
                      inputProps={{
                        style: { textTransform: "uppercase" },
                        autoComplete: "off",
                      }}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="fields add_new_item_divv">
                    <label className="label secondary">
                      Mobile Number <span className="text-red-600">*</span>
                    </label>
                    <TextField
                      id="mobile-number"
                      size="small"
                      value={mobileNo}
                      onChange={(e) => {
                        setMobileNo(e.target.value);
                        setUnsavedItems(true);
                      }}
                      style={{ minWidth: 300 }}
                      inputRef={(el) => (inputRefs.current[1] = el)}
                      onKeyDown={(e) => handleKeyDown(e, 1)} // Moves to next or submit manually
                    />
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className="px-3 pb-3">
              <Button
                autoFocus
                variant="contained"
                color="success"
                onClick={AddCustomerRecord}
                ref={(el) => (inputRefs.current[2] = el)}
              >
                Save
              </Button>
            </div>
          </DialogActions>
        </Dialog>

        {/*<====================================================================== item purchase history  =====================================================================> */}

        <Dialog
          open={openPurchaseHistoryPopUp}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "65%",
                maxWidth: "1900px",
              },
            },
          }}
        >
          <DialogTitle id="alert-dialog-title" className="secondary">
            Item Purchase History
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => setOpenPurchaseHistoryPopUp(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#ffffff",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div
                className="flex"
                style={{ flexDirection: "column", gap: "19px" }}
              >
                <table className="custom-table" style={{ background: "none" }}>
                  <thead>
                    <tr>
                      {LastPurchaseListcolumns.map((column, index) => (
                        <th key={column.id}>
                          <div className="headerStyle">
                            <span>{column.label}</span>
                            <SwapVertIcon />
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseHistory.map((row, index) => {
                      return (
                        <tr
                          hover
                          tabIndex={-1}
                          key={row.code}
                          onClick={() => setOpenPurchaseHistoryPopUp(true)}
                        >
                          {LastPurchaseListcolumns.map((column) => {
                            const value = row[column.id];

                            return (
                              <td key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        {/*<====================================================================== Add item  =====================================================================> */}
        <Dialog open={openAddItemPopUp} className="custom-dialog modal_991 ">
          <DialogTitle id="alert-dialog-title" className="secondary">
            Add New Item
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={resetAddDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#ffffff",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent className="">
            <DialogContentText id="alert-dialog-description">
              <div className="bg-white">
                <div className="mainform bg-white rounded-lg">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="fields add_new_item_divv">
                      <label className="label secondary">Item Name</label>
                      <TextField
                        id="outlined-number"
                        inputRef={itemNameInputRef}
                        onKeyDown={handleKeyDown}
                        size="small"
                        sx={{ minWidth: "150px" }}
                        value={addItemName}
                        onChange={(e) => setAddItemName(e.target.value)}
                      />
                    </div>
                    <div className="fields add_new_item_divv">
                      <label className="label  secondary">Barcode</label>
                      <TextField
                        id="outlined-number"
                        inputRef={barcodeInputRef}
                        onKeyDown={handleKeyDown}
                        type="number"
                        size="small"
                        sx={{ minWidth: "150px" }}
                        value={addBarcode}
                        onChange={(e) => setAddBarcode(Number(e.target.value))}
                      />
                    </div>
                    <div className="fields add_new_item_divv">
                      <label className="label secondary">Unit</label>
                      <TextField
                        id="outlined-number"
                        type="number"
                        inputRef={unitInputRef}
                        size="small"
                        sx={{ minWidth: "150px" }}
                        value={addUnit}
                        onChange={(e) => setAddUnit(e.target.value)}
                        onKeyDown={(e) => {
                          handleKeyDown(e);
                          if (e.key === "Enter") {
                            handleAddNewItemValidation();
                          }
                        }}
                      />
                    </div>
                    <div className="fields add_new_item_divv">
                      <label className="label secondary">Pack</label>
                      <TextField
                        disabled
                        id="outlined-number"
                        size="small"
                        sx={{ minWidth: "150px" }}
                        value={`1 * ${addUnit} `}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--COLOR_UI_PHARMACY)",
                "&:hover": {
                  backgroundColor: "var(--COLOR_UI_PHARMACY)", // Keep the hover color same
                },
              }}
              onClick={handleAddNewItemValidation}
            >
              <ControlPointIcon className="mr-2" />
              Add New Item
            </Button>
          </DialogActions>
        </Dialog>

        {/*<====================================================================== Pill refill modal  =====================================================================> */}

        <Dialog open={openReminderPopUp} className="custom-dialog modal_991 ">
          <DialogTitle id="alert-dialog-title" className="secondary">
            Set Pill/Refill Reminder
          </DialogTitle>


          <IconButton
            aria-label="close"
            onClick={() => setOpenReminderPopUp(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#ffffff",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent className="">
            <DialogContentText id="alert-dialog-description">
              <div className="bg-white">
                <div className="mainform bg-white rounded-lg">
                  <div className="flex flex-col md:flex-row gap-4">
                    <table className="item-table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Item Name</th>
                          <th>Quantity</th>
                          <th className="">
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "center" }}>
                              Morning <FaCloudSun />
                            </span>
                          </th>
                          <th className="">
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "center" }}>
                              Noon <FaSun />
                            </span>
                          </th>
                          <th className="">
                            <span style={{ display: "flex", alignItems: "center", gap: "4px", justifyContent: "center" }}>
                              Night <FaCloudMoon />
                            </span>
                          </th>

                          <th>Refill day</th>
                          <th>Refill Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ItemSaleList?.sales_item?.map((item) => (
                          <tr key={item.id} className="item-List" style={{ whiteSpace: "nowrap" }}>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                              <Checkbox
                                checked={checkedItems[item.id] || false}
                                onChange={(e) =>
                                  setCheckedItems((prev) => ({
                                    ...prev,
                                    [item.id]: e.target.checked,
                                  }))
                                }
                              />
                            </td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{item.iteam_name || barcodeItemName}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{item.qty || "-----"}</td>

                            {["morning", "noon", "night"].map((time) => (
                              <td key={time}>
                                <TextField
                                  type="number"
                                  size="small"
                                  sx={{ width: "100px" }}
                                  value={pillTimes[item.id]?.[time] || 0}
                                  onChange={(e) => {
                                    const updated = {
                                      ...pillTimes[item.id],
                                      [time]: Number(e.target.value),
                                    };
                                    updatePillTiming(item, updated);
                                  }}
                                />
                              </td>
                            ))}

                            <td>
                              <TextField
                                type="number"
                                size="small"
                                sx={{ width: "100px" }}
                                disabled
                                value={pillTimes[item.id]?.refillDays || 0}
                              />
                            </td>

                            <td>
                              <DatePicker
                                selected={pillTimes[item.id]?.refillDate || new Date()}
                                onChange={(date) => {
                                  setPillTimes((prev) => ({
                                    ...prev,
                                    [item.id]: {
                                      ...prev[item.id],
                                      refillDate: date,
                                    },
                                  }));
                                }}
                                dateFormat="dd/MM/yyyy"
                                customInput={
                                  <TextField
                                    size="small"
                                    sx={{ width: "130px" }}
                                  />
                                }
                              />
                            </td>

                          </tr>
                        ))}
                      </tbody>

                    </table>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--COLOR_UI_PHARMACY)",
                "&:hover": {
                  backgroundColor: "var(--COLOR_UI_PHARMACY)", // Keep the hover color same
                },
              }}
              onClick={() => {
                handleReminder();
              }}
            >
              <ControlPointIcon className="mr-2" />
              Set Reminder
            </Button>
          </DialogActions>
        </Dialog>
        {/*<====================================================================== Delete modal  =====================================================================> */}

        <div
          id="modal"
          value={IsDelete}
          className={`fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] ${IsDelete ? "block" : "hidden"
            }`}
        >
          <div />
          <div className="w-full max-w-md bg-white shadow-lg rounded-md p-4 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer absolute top-4 right-4 fill-current text-gray-600 hover:text-red-500 "
              viewBox="0 0 24 24"
              onClick={() => setIsDelete(false)}
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
            </svg>
            <div className="my-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 fill-red-500 inline"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                  data-original="#000000"
                />
                <path
                  d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                  data-original="#000000"
                />
              </svg>
              <h4 className="text-lg font-semibold mt-6">
                Are you sure you want to delete it?
              </h4>
            </div>
            <div className="flex gap-5 justify-center">
              <button
                type="submit"
                className="px-6 py-2.5 w-44 items-center rounded-md text-white text-sm font-semibold border-none outline-none bg-red-500 hover:bg-red-600 active:bg-red-500"
                onClick={() => handleDeleteItem(saleItemId)}
              >
                Delete
              </button>
              <button
                type="button"
                className="px-6 py-2.5 w-44 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-900 hover:text-white"
                onClick={() => setIsDelete(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/*<====================================================================== Leave page modal  =====================================================================> */}

        <Prompt
          when={unsavedItems}
          message={(location) => {
            handleNavigation(location.pathname);
            return false;
          }}
        />
        <div
          id="modal"
          value={openModal}
          style={{ zIndex: 9999 }}
          className={`fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] ${openModal ? "block" : "hidden"
            }`}
        >
          <div />

          <div className="w-full max-w-md bg-white shadow-lg rounded-md p-4 relative">
            <div className="my-4 logout-icon">
              <VscDebugStepBack
                className=" h-12 w-14"
                style={{ color: "#628A2F" }}
              />
              <h4
                className="text-lg font-semibold mt-6 text-center"
                style={{ textTransform: "none" }}
              >
                Are you sure you want to leave this page ?
              </h4>
            </div>
            <div className="flex gap-5 justify-center">
              <button
                type="submit"
                className="px-6 py-2.5 w-44 items-center rounded-md text-white text-sm font-semibold border-none outline-none primary-bg hover:primary-bg active:primary-bg"
                onClick={handleLeavePage}
              >
                Yes
              </button>
              <button
                type="button"
                className="px-6 py-2.5 w-44 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-400 hover:text-black"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {showModal && (
          <TipsModal
            id="add-purchase"
            onClose={() => setShowModal(false)}
          />
        )}
      </div>

    </>
  );
};
export default Addsale;