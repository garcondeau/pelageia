import pandas as pd

class FileHandler:
    def __init__(self):
        self.raw_params = {}

    def file_params_getter(self, raw_params):
        params = raw_params
        return params

    def data_processor(self, params, raw_data):
        df = pd.read_csv(raw_data, params)
        return pd.to_json(df)

    def file_processor(self, file_obj, file_params):
        return self.data_processor(params=self.file_params_getter(file_params) ,raw_data=file_obj)    


def start_processor(file_obj, file_params):
    _FileHandler = FileHandler()
    _FileHandler.file_processor(file_obj, file_params)