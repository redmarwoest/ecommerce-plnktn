import { createContext, FC, useContext, useReducer, useMemo } from "react";

/* state management for sidebar */
export interface StateModifiersSidebar {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateModifiersNavbar {
  openNavbar: () => void;
  closeNavbar: () => void;
}

const sidebarStateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const navbarStateModifiers = {
  openNavbar: () => {},
  closeNavbar: () => {},
};

export interface StateValuesSidebar {
  isSidebarOpen: boolean;
}

export interface StateValuesNavbar {
  isNavbarOpen: boolean;
}

const initialStateSidebar = { isSidebarOpen: false };
const initialStateNavbar = { isNavbarOpen: false };

type State = StateValuesSidebar &
  StateModifiersSidebar &
  StateValuesNavbar &
  StateModifiersNavbar;

const UIContext = createContext<State>({
  ...sidebarStateModifiers,
  ...initialStateSidebar,
  ...navbarStateModifiers,
  ...initialStateNavbar,
});

type ActionSidebar = {
  typeSidebar: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR";
};

type ActionNavbar = {
  typeNavbar: "OPEN_NAVBAR" | "CLOSE_NAVBAR";
};

function uiReducerSidebar(
  stateSidebar: StateValuesSidebar,
  actionSidebar: ActionSidebar
) {
  switch (actionSidebar.typeSidebar) {
    case "OPEN_SIDEBAR": {
      return {
        ...stateSidebar,
        isSidebarOpen: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...stateSidebar,
        isSidebarOpen: false,
      };
    }
  }
}

function uiReducerNavbar(
  stateNavbar: StateValuesNavbar,
  actionNavbar: ActionNavbar
) {
  switch (actionNavbar.typeNavbar) {
    case "OPEN_NAVBAR": {
      return {
        ...stateNavbar,
        isNavbarOpen: true,
      };
    }
    case "CLOSE_NAVBAR": {
      return {
        ...stateNavbar,
        isNavbarOpen: false,
      };
    }
  }
}

export const UIProvider: FC = ({ children }: any) => {
  const [stateSidebar, dispatchSidebar] = useReducer(
    uiReducerSidebar,
    initialStateSidebar
  );
  const [stateNavbar, dispatchNavbar] = useReducer(
    uiReducerNavbar,
    initialStateNavbar
  );
  const openSidebar = () => dispatchSidebar({ typeSidebar: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatchSidebar({ typeSidebar: "CLOSE_SIDEBAR" });
  const openNavbar = () => dispatchNavbar({ typeNavbar: "OPEN_NAVBAR" });
  const closeNavbar = () => dispatchNavbar({ typeNavbar: "CLOSE_NAVBAR" });

  const value = useMemo(() => {
    return {
      ...stateSidebar,
      ...stateNavbar,
      openSidebar,
      closeSidebar,
      openNavbar,
      closeNavbar,
    };
  }, [stateSidebar.isSidebarOpen, stateNavbar.isNavbarOpen]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
