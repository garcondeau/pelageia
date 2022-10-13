from generators.params_builder import params_builder
from generators.dataframe_generator import dataframe_generator
from generators.sql_generator import sql_generator

class generator_controller:
    @staticmethod
    def process_supplier(supplier_params):
        if supplier_params['status']:
            print(supplier_params)
            download_files = supplier_params.get('download_files')
            if download_files is not None:
                for file in download_files:
                    file_name = file.get('download_file_name')
                    download_type = file.get('download_type')
                    download_params = file.get('download_params')
                    LoadController.download(download_type, supplier_params['supplier_name'], file_name, download_params)
            df = dataframe_generator.get_supplier_dataframe(supplier_params)
            df = sql_generator.get_queried_data(df, supplier_params)
            return df
        else:
            print(f'Supplier {supplier_params["supplier_name"]} is disabled')